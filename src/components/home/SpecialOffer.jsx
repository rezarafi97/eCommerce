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
      <div className="flex justify-around mb-16 px-14">
        <div>
          <h3 className="font-poppins text-base font-semibold text-red-600">
            Categories
          </h3>
          <p className="font-inter text-5xl font-semibold my-8">
            {product.title}
          </p>
          <Timer timer={timer} setTimer={setTimer} timerEnd={timerEnd} />
          <button type="button" className="py-4 px-12 my-16 bg-red-600">
            <Link
              to="/productdetail"
              className="text-white font-poppins text-base font-medium"
            >
              Buy Now!
            </Link>
          </button>
        </div>
        <div className="w-1/2 flex justify-center">
          <img className="h-80 " src={product.image} />
        </div>
      </div>
    );
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return <div>{content}</div>;
};

export default SpecialOffer;
