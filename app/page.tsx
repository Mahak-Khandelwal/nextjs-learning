import Image from "next/image";
import ProductCard from "./components/ProductCard";
import Link from "next/link";

export default function Home() {
  const product = {
    name: "iPhone 15 Pro Max, 128 GB",
    rating: 4.5,
    totalRating: 8600,
    boughtInPast: 5000,
    price: 52990,
    mrp: 69000,
    discount: 24,
    delivery: "FREE delivery Mon,1Dec",
    image:
      "https://m.media-amazon.com/images/I/71657TiFeHL._AC_UY327_FMwebp_QL65_.jpg",
  };
  return (
    <div className="flex flex-col gap-2 items-center w-full lg:flex-row lg:flex-wrap lg:gap-4 ">
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
      <ProductCard product={product} />
    </div>
  );
}
