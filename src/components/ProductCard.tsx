import Image from "next/image";
import React from "react";
import { ProductType } from "../lib/type";
import ProductPrice from "./ProductPrice";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({ product }: { product: ProductType }) => {
  const regularPrice = product?.price;
  const discountedPrice = product?.price + product?.discountPercentage / 100;
  return (
    <div className="border rounded-md border-gray-400">
      {/* image */}
      <div className="w-full h-64 overflow-hidden p-5 group relative">
        <Image
          src={product?.images[0]}
          alt="productImage"
          width={500}
          height={500}
          className="w-full h-full object-contain group-hover:scale-110 duration-300"
        />
        <span className="text-xs bg-themeColor text-white/90 absolute top-2 right-2 py-1 px-4 rounded-full">
          {product?.discountPercentage}%
        </span>
      </div>
      {/* data */}
      <div className="border-t p-5">
        <p className="text-sm capitalize font-semibold">{product?.category}</p>
        <h2 className="font-semibold text-base hover:text-themeColor duration-200">
          {product?.title}
        </h2>
        <ProductPrice
          regularPrice={regularPrice}
          discountedPrice={discountedPrice}
        />
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
