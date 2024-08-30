import { auth } from "@/auth";
import { redirect } from "next/navigation";

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();
  if (!session) {
    redirect("/");
  }
  return <>{children}</>;
};

export default RootLayout;
