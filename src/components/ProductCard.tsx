import Image from "next/image";
import React from "react";
import { ProductType } from "../lib/type";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div className="border rounded-md border-gray-400">
      {/* image */}
      <div className="w-full h-64 overflow-hidden p-5 group">
        <Image
          src={product?.images[0]}
          alt="productImage"
          width={500}
          height={500}
          className="w-full h-full object-contain group-hover:scale-110 duration-300"
        />
      </div>
      {/* data */}
      <div className="border-t p-5">
        <p className="text-sm capitalize font-semibold">{product?.category}</p>
        <h2 className="font-semibold text-base hover:text-themeColor duration-200">
          {product?.title}
        </h2>
      </div>
    </div>
  );
};

export default ProductCard;
