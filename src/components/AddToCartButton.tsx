"use client";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { ProductType, StateType } from "../lib/type";
import { addToCart, decreaseQuantity } from "../redux/shofySlice";
import { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
interface Props {
  className?: string;
  product: ProductType;
}
const AddToCartButton = ({ className, product }: Props) => {
  const [existingProduct, setExistingProduct] = useState<ProductType | null>(
    null
  );
  const { cart } = useSelector((state: StateType) => state?.shofy);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success(`${product?.title.substring(0, 10)}... added successfully!`);
  };
  useEffect(() => {
    const availableProduct = cart?.find((item) => item?.id === product?.id);
    if (availableProduct) {
      setExistingProduct(availableProduct);
    }
  }, [cart, product]);

  const handleMinus = () => {
    if (existingProduct?.quantity! > 1) {
      dispatch(decreaseQuantity(product?.id));
      toast.success("Quantity decreased successfully!");
    } else {
      toast.error("Quantity can not decrease less than 1");
    }
  };
  return (
    <>
      {existingProduct ? (
        <div className="flex self-start items-center gap-2 py-2 mb-2">
          <button
            disabled={existingProduct?.quantity! <= 1}
            onClick={handleMinus}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyColor rounded-full text-sm hover:bg-white duration-300 disabled:text-gray-300 disabled:hover:bg-[#f7f7f7] disabled:hover:border-gray-200 disabled:hover:cursor-none"
          >
            <FaMinus />
          </button>
          <p className="text-base font-semibold w-10 text-center">
            {existingProduct?.quantity}
          </p>
          <button
            onClick={handleAddToCart}
            className="bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-skyColor rounded-full text-sm hover:bg-white duration-300 cursor-pointer"
          >
            <FaPlus />
          </button>
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className={twMerge(
            "bg-transparent border w-full border-skyColor text-black rounded-full py-2 hover:bg-skyColor hover:text-white duration-300 my-2 text-sm",
            className
          )}
        >
          Add to cart
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
