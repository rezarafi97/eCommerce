import { Link } from "react-router-dom";

import { useGetAllProductsQuery } from "../../features/api/apiSlice";
import { Card, Title } from "../common";

const Products = () => {
  const {
    data: products = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllProductsQuery();

  let content;
  let discounted;
  let normal;
  let newest;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    discounted = products.slice(0, 5);
    normal = products.slice(5, 8);
    newest = products.slice(9, 13);
    content = discounted.map((p) => <Card p={p} key={p.id} discount={1} />);
    content.push(normal.map((p) => <Card p={p} key={p.id} discount={3} />));
    content.push(newest.map((p) => <Card p={p} key={p.id} discount={2} />));
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <Title title="Our Products" />
      <div className="mb-16">
        <p className="font-inter text-xl md:text-4xl font-semibold tracking-widest">
          Explore Our Products
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">{content}</div>
      <div className="flex justify-center">
        <button type="button" className="py-2 lg:py-4 px-8 lg:px-12 my-16 bg-red-600">
          <Link
            to="/productdetail"
            className="text-white font-poppins text-xs lg:text-base font-medium"
          >
            All Products
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Products;
