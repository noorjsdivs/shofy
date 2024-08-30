import { notFoundImage } from "@/assets";
import Container from "@/components/Container";
import CustomButton from "@/components/ui/CustomButton";
import Image from "next/image";

const NotFoundPage = () => {
  return (
    <Container className="py-10 flex flex-col gap-2 items-center justify-center">
      <Image src={notFoundImage} alt="notFoundImage" className="w-60" />
      <h2 className="text-2xl font-semibold">Oops! Page not found</h2>
      <p className="text-sm max-w-80 text-gray-500 text-center">
        Whoops, this is embarrassing. Looks like the page you were looking for
        wasn&apos;t found.
      </p>
      <CustomButton href="/">Back to Home</CustomButton>
    </Container>
  );
};

export default NotFoundPage;
