"use client";
import Link from "next/link";
import { twMerge } from "tailwind-merge";

interface Props {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: any;
}

const CustomButton = ({ children, className, href, onClick }: Props) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={twMerge(
            "bg-themeColor/90 text-white/90 py-2 px-6 hover:text-white hover:bg-themeColor duration-200 cursor-pointer",
            className
          )}
        >
          {children}
        </Link>
      ) : (
        <button
          onClick={onClick}
          className={twMerge(
            "bg-themeColor/90 text-white/90 py-2 px-6 hover:text-white hover:bg-themeColor duration-200 cursor-pointer",
            className
          )}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default CustomButton;
