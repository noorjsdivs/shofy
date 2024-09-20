import { logo } from "@/assets";
import { auth } from "@/auth";
import Image from "next/image";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdFavoriteBorder } from "react-icons/md";
import Container from "../Container";
import SearchInput from "../SearchInput";
import HeaderIcon from "./HeaderIcon";

const MiddleHeader = async () => {
  const session = await auth();

  return (
    <div className="w-full h-20 border-b-[1px] border-b-gray-400">
      <Container className="h-full flex items-center justify-between gap-20">
        {/* Logo */}

        <Link href={"/"}>
          <Image src={logo} alt="logoImage" className="w-32" />
        </Link>

        <SearchInput />

        {/* ListItem */}
        <div className="flex items-center gap-4">
          {session?.user ? (
            <Link href={"/admin/profile"} className="flex items-center gap-2">
              <div className="text-xl border border-darkBg rounded-full">
                <Image
                  src={session?.user?.image!}
                  alt="userImage"
                  width={200}
                  height={200}
                  className="w-10 rounded-full"
                />
              </div>
              <div>
                <p className="text-xs">Hello, {session?.user?.name}</p>
                <p className="text-sm font-semibold">view profile</p>
              </div>
            </Link>
          ) : (
            <Link href={"/login"} className="flex items-center gap-2">
              <div className="text-xl border border-darkBg p-2.5 rounded-full">
                <FaRegUser />
              </div>
              <div>
                <p className="text-xs">Hello, Guest</p>
                <p className="text-sm font-semibold">Login / Register</p>
              </div>
            </Link>
          )}
          <HeaderIcon />
        </div>
      </Container>
    </div>
  );
};

export default MiddleHeader;
