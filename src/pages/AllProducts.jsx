import { useState } from "react";

import { useGetAllProductsQuery } from "../features/api/apiSlice";
import { Card } from "../components/common";

const AllProducts = () => {
  const [sIndex, setSIndex] = useState(0);
  const [fIndex, setFIndex] = useState(12);

  const prevHandler = () => {
    setSIndex((prev) => prev - 12);
    setFIndex((prev) => prev - 12);
  };

  const nextHandler = () => {
    setSIndex((prev) => prev + 12);
    setFIndex((prev) => prev + 12);
  };

  const {
    data: products = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllProductsQuery();

  let content;
  let paginate;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    paginate = products.slice(sIndex, fIndex);
    content = paginate.map((p) => <Card p={p} key={p.id} discount={3} />);
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <div className="mt-20 mb-32">
      <div className="mb-16">
        <p className="font-inter text-xl md:text-4xl font-semibold tracking-widest">
          All Products
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {content}
      </div>
      <div className="flex gap-4">
        <button
          type="button"
          className="py-4 px-8 bg-red-700 text-white"
          onClick={prevHandler}
        >
          prev
        </button>
        <button
          type="button"
          className="py-4 px-8 bg-red-700 text-white"
          onClick={nextHandler}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
