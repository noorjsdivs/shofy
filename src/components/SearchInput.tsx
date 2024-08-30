"use client";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="flex-1 h-10 relative">
      <input
        type="text"
        placeholder="Search your products here..."
        className="w-full border-2 border-darkBg/70 outline-none pl-4 pr-16 h-full"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      {searchValue && (
        <IoClose
          onClick={() => setSearchValue("")}
          className="text-xl text-gray-500 hover:text-red-500 duration-200 cursor-pointer absolute top-2 right-12"
        />
      )}
      <span className="bg-themeColor/90 text-themeWhite inline-flex w-10 h-10 text-lg items-center justify-center absolute top-0 right-0 border-2 border-themeColor/90 hover:bg-themeColor hover:border-themeColor duration-200 cursor-pointer">
        <FiSearch />
      </span>
    </div>
  );
};

export default SearchInput;
