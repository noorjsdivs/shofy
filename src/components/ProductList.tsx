import { ProductType } from "../lib/type";
import Container from "./Container";
import ProductCard from "./ProductCard";

interface Props {
  products: ProductType[];
}

const ProductList = ({ products }: Props) => {
  return (
    <Container className="py-10">
      <div className="flex items-center gap-10">
        <h2 className="text-2xl font-bold ">Trending Products</h2>
        <div className="w-full h-[1px] bg-gray-300 flex-1" />
      </div>
      <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {products?.map((product) => (
          <ProductCard key={product?.id} product={product} />
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
