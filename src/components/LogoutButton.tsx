import { signOut } from "@/auth";
import React from "react";

const LogoutButton = () => {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <button>Sign Out</button>
    </form>
  );
};

export default LogoutButton;
