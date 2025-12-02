"use client";

import { Label } from "@radix-ui/react-label";
import useAuth from "../../store/useAuth";
import { Button } from "@/components/ui/button";

const about = () => {
  const { isLogin, setLogout } = useAuth();

  return (
    <div>
      <Label>hello world</Label>
      {isLogin && (
        <div>
          {" "}
          <Button>One</Button>
          <Button>Two</Button>
        </div>
      )}
    </div>
  );
};

export default about;
