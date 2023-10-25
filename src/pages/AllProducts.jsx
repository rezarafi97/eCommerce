import { useState } from "react";
import { useGetAllProductsQuery } from "../features/api/apiSlice";

import { Card } from "../components/common";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";

const AllProducts = () => {
  const [index, setIndex] = useState(0);
  const [sIndex, setSIndex] = useState(0);
  const [fIndex, setFIndex] = useState(12);

  const prevHandler = () => {
    setIndex((prev) => prev - 1);
    setSIndex((prev) => prev - 12);
    setFIndex((prev) => prev - 12);
  };

  const nextHandler = () => {
    setIndex((prev) => prev + 1);
    setSIndex((prev) => prev + 12);
    setFIndex((prev) => prev + 12);
  };

  const pageHandler = (item) => {
    setIndex(item);
    setSIndex(item);
    setFIndex(item + 12);
  };

  const numClass =
    "cursor-pointer font-poppins text-base font-normal opacity-70";

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
      <div className="flex justify-between items-center mb-16">
        <p className="font-inter text-xl md:text-4xl font-semibold tracking-widest">
          All Products
        </p>
        <p className="font-poppins text-base font-normal">Page {index + 1}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {content}
      </div>
      <div className="flex gap-12 justify-center items-center mt-8">
        <button type="button" onClick={prevHandler} disabled={index === 0}>
          <GrLinkPrevious className="w-6 h-6" />
        </button>

        <p
          className={numClass}
          onClick={() => pageHandler(index - 1)}
          hidden={index <= 0}
        >
          {index}
        </p>
        <p
          className="cursor-pointer font-poppins text-base font-medium"
          onClick={() => pageHandler(index)}
          disabled
        >
          {index + 1}
        </p>
        <p
          className={numClass}
          onClick={() => pageHandler(index + 1)}
          hidden={index >= Math.floor(products.length / 12)}
        >
          {index + 2}
        </p>

        <button
          type="button"
          onClick={nextHandler}
          disabled={index === Math.floor(products.length / 12)}
        >
          <GrLinkNext className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
