import { auth } from "@/auth";
import Container from "@/src/components/Container";
import LoginForm from "@/src/components/LoginForm";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth();

  if (session) {
    redirect("/");
  }
  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
