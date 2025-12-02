import { Button } from "@/components/ui/button";
import React from "react";

interface IProduct {
  name: string;
  image: string;
  rating: number;
  totalRating: number;
  price: number;
  mrp: number;
  discount: number;
  delivery: string;
}

interface ProductCardProps {
  product: IProduct;
}
const black = "black"
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={`  p-4 w-80  border  flex flex-col items-center lg:items-start`}>
      <div>
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg aspect-auto h-20 lg:h-48 object-fit"
        />
      </div>

      <h2 className="text-lg font-semibold mt-2 text-foreground">
        {product.name}
      </h2>

      <div className="flex items-center gap-2 mt-1 text-sm text-muted">
        ⭐ {product.rating} | {product.totalRating}+ ratings
      </div>

      <div className="mt-2">
        <span className="text-xl font-bold text-success">₹{product.price}</span>
        <span className="text-sm line-through text-muted ml-2">
          ₹{product.mrp}
        </span>
        <span className="text-sm text-danger font-medium ml-2">
          ({product.discount}% OFF)
        </span>
      </div>

      <p className="text-sm text-muted mt-1">{product.delivery}</p>

      <Button variant={"default"} size={"lg"}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
