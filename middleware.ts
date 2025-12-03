import { NextRequest, NextResponse } from "next/server";

const Routes = [
  {
    path: "/todo",
    isProtected: true,
  },
  {
    path: "/",
    isProtected: true,
  },
  {
    path: "/about",
    isPublic: true,
  },
  {
    path: "/login",
    isAuthentication: true,
  },
  {
    path: "/signup",
    isAuthentication: true,
  },
];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isLogin = request.cookies.get("isLogin")?.value === "true";
    console.log("Running")
  // Find the current route configuration
  const currentRoute = Routes.find((item) => item.path === pathname);

  // No route config → treat as public, allow access
  if (!currentRoute) {
    return NextResponse.next();
  }

  // 🔒 Protected route & not logged in → redirect to login
  if (currentRoute.isProtected && !isLogin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 🔐 Auth route (/login, /signup) & already logged in → redirect to home
  if (currentRoute.isAuthentication && isLogin) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // ✅ Route is allowed for current auth state
  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};