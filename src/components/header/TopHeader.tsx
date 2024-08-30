import Image from "next/image";
import Container from "../Container";
import { TbChevronDown } from "react-icons/tb";
import { usa } from "@/assets";

const TopHeader = () => {
  return (
    <div className="bg-darkBg text-themeWhite text-sm font-medium">
      <Container className="flex items-center justify-between">
        <p>
          Shop with confidence! We offer a hassle-free 30 days return service
          for your peace of mind.
        </p>
        <div className="flex items-center text-sm font-semibold">
          <div className="border-r-[1px] border-r-gray-600 h-8 flex items-center px-6">
            <Image src={usa} alt="usaImage" className="w-auto mr-1" />
            <p className="flex items-center gap-1">
              English
              <TbChevronDown className="text-base mt-.5" />
            </p>
          </div>
          <div className="border-r-[1px] border-r-gray-600 h-8 flex items-center px-6">
            <p className="flex items-center gap-1">
              USD
              <TbChevronDown className="text-base mt-.5" />
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
