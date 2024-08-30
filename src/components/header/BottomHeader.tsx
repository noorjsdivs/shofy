import React from "react";
import Container from "../Container";
import Link from "next/link";
import { auth } from "@/auth";
import LogoutButton from "../LogoutButton";

const BottomHeader = async () => {
  const session = await auth();

  const navigation = [
    { title: "Home", href: "/" },
    { title: "Products", href: "/products" },
    { title: "Categories", href: "/categories" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];
  return (
    <div className="border-b-[1px] border-b-gray-400 py-1">
      <Container className="flex items-center justify-between">
        <div className="text-sm flex items-center gap-4 font-medium">
          {navigation?.map(({ title, href }) => (
            <Link key={title} href={href}>
              {title}
            </Link>
          ))}
          {session?.user && <LogoutButton />}
        </div>
        <p className="text-xs md:inline-flex hidden font-medium text-gray-500">
          Hotline: <span className="text-black">+88 01202154544</span>
        </p>
      </Container>
    </div>
  );
};

export default BottomHeader;
