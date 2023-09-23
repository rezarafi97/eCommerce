import { useState } from "react";


import { useGetProductQuery } from "../../features/api/apiSlice";
import { Button, Timer } from "../common";

const SpecialOffer = () => {
  const [timer, setTimer] = useState({});



  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductQuery(1);

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = (
      <div className="flex gap-2 justify-around mb-16 px-14">
        <div>
          <h3 className="font-poppins text-xs md:text-base font-semibold text-red-600">
            Categories
          </h3>
          <p className="font-inter text-base md:text-xl lg:text-5xl font-semibold my-2 md:my-8">
            {product.title}
          </p>
          <Timer timer={timer} setTimer={setTimer} />
          <div className="my-6 md:my-10 lg:my-16 ">
            <Button text="Buy Now!" />
          </div>
        </div>
        <div className="w-1/2">
          <img src={product.image} />
        </div>
      </div>
    );
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return <div>{content}</div>;
};

export default SpecialOffer;
