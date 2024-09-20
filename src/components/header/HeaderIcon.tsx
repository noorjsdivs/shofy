"use client";
import { StateType } from "@/src/lib/type";
import Link from "next/link";
import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";
import { useSelector } from "react-redux";

const HeaderIcon = () => {
  const { cart, favorite } = useSelector((state: StateType) => state?.shofy);
  return (
    <>
      <Link href={"/favorite"} className="relative">
        <MdFavoriteBorder className="text-2xl" />
        <span className="w-4 h-4 text-[10px] font-semibold bg-themeColor text-themeWhite inline-flex items-center justify-center rounded-full absolute -top-1 -right-1">
          {favorite?.length > 0 ? favorite?.length : "0"}
        </span>
      </Link>
      <Link href={"/cart"} className="relative">
        <HiOutlineShoppingBag className="text-2xl" />
        <span className="w-4 h-4 text-[10px] font-semibold bg-themeColor text-themeWhite inline-flex items-center justify-center rounded-full absolute -top-1 -right-1">
          {cart?.length > 0 ? cart?.length : "0"}
        </span>
      </Link>
    </>
  );
};

export default HeaderIcon;
