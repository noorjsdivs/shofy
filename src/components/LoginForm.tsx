import Image from "next/image";
import React from "react";
import { googleImage } from "../assets";
import { signIn } from "@/auth";

const LoginForm = () => {
  return (
    <div className="p-10">
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <h2 className="text-xl font-semibold mb-2 tracking-normal underline underline-offset-2 decoration-[1px]">
          Oauth login
        </h2>
        <button
          type="submit"
          className="flex items-center border hover:border-green-600 py-1 px-4 rounded-md duration-200"
        >
          <Image src={googleImage} alt="goggleImage" className="w-10" />
          Sign in with Google
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
