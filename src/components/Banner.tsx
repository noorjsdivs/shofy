import React from "react";
import Container from "./Container";
import Image from "next/image";
import { bannerImageOne } from "../assets";
import { Button } from "./ui/button";
import { MoveRight } from "lucide-react";

const Banner = () => {
  return (
    <div className="bg-[#115061] py-10 text-white">
      <Container className="flex items-center justify-between flex-col md:flex-row">
        <div className="flex flex-col gap-y-4">
          <p className="text-sm font-semibold">Starting at $274.00</p>
          <h2 className="text-6xl font-bold max-w-xl">
            The best table Collection 2023
          </h2>
          <p className="text-lg font-semibold">
            Exclusive offer <span className=" text-darkYellow">-35%</span> off
            this week
          </p>
          <Button className="w-36 py-5 mt-4 bg-white text-black flex items-center gap-x-2 hover:bg-transparent hover:text-white border border-white/40">
            Shop Now <MoveRight size={20} />
          </Button>
        </div>
        <Image src={bannerImageOne} alt="bannerImageOne" />
      </Container>
    </div>
  );
};

export default Banner;
