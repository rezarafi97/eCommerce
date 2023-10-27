import { useState } from "react";
import { useParams } from "react-router-dom";

import { useGetAllProductsQuery } from "../features/api/apiSlice";
import { ProductsList } from "../components/product";

const Catagory = () => {
  const [index, setIndex] = useState(0);

  const { catagory } = useParams();

  const {
    data: products = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllProductsQuery();

  const filteredProducts = products.filter((p) => p.category === catagory);

  return (
    <div className="mt-20 mb-32">
      <ProductsList
        text={catagory}
        index={index}
        setIndex={setIndex}
        isLoading={isLoading}
        isSuccess={isSuccess}
        isError={isError}
        error={error}
        products={filteredProducts}
      />
    </div>
  );
};

export default Catagory;