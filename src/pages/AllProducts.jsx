import { useState } from "react";
import { useGetAllProductsQuery } from "../features/api/apiSlice";

import { ProductsList } from "../components/product";

const AllProducts = () => {
  const [index, setIndex] = useState(0);

  const {
    data: products = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllProductsQuery();

  return (
    <div className="mt-20 mb-32">
      <ProductsList
        text="All Products"
        index={index}
        setIndex={setIndex}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
        products={products}
      />
    </div>
  );
};

export default AllProducts;
