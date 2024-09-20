import React from "react";
import PriceFormat from "./PriceFormat";
interface Props {
  regularPrice: number;
  discountedPrice: number;
}
const ProductPrice = ({ regularPrice, discountedPrice }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <PriceFormat
        amount={discountedPrice}
        className="text-gray-500 line-through font-normal"
      />
      <PriceFormat
        amount={regularPrice}
        className="text-themeColor font-bold"
      />
    </div>
  );
};

export default ProductPrice;
