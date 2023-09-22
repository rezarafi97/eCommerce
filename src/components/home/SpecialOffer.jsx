import { useState } from "react";
import { endOfToday } from "date-fns";

import { Link } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";

import { Timer } from "../common";

const SpecialOffer = () => {
  const [timer, setTimer] = useState({});

  const timerEnd = endOfToday();

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
          <Timer timer={timer} setTimer={setTimer} timerEnd={timerEnd} />
          <button
            type="button"
            className="py-2 lg:py-4 px-8 lg:px-12 my-6 md:my-10 lg:my-16 bg-red-600"
          >
            <Link
              to="/productdetail"
              className="text-white font-poppins text-xs lg:text-base font-medium"
            >
              Buy Now!
            </Link>
          </button>
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
