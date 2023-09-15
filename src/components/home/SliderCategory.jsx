import { useState } from "react";
import { Link } from "react-router-dom";

import { endOfToday } from "date-fns";
import { useGetLimitedProductsQuery } from "../../features/api/apiSlice";

import { Card, Timer, Title } from "../common";

/* eslint-disable react/no-unescaped-entities */
const SliderCategory = () => {
  const [timer, setTimer] = useState({});

  const timerEnd = endOfToday();

  const {
    data: products = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetLimitedProductsQuery();

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = products.map((p) => <Card p={p} key={p.id} />);
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <div>
        <div className="flex gap-4 mb-6">
          <Title title="Today's" />
        </div>
        <div className="flex justify-between">
          <div className="flex gap-20">
            <div className="flex items-end">
              <p className="font-inter text-xl md:text-4xl font-semibold tracking-widest">
                Flash Sales
              </p>
            </div>
            <Timer timer={timer} setTimer={setTimer} timerEnd={timerEnd} />
          </div>
        </div>
      </div>
      <div className="mt-10 w-full whitespace-nowrap overflow-x-scroll snap-x">
        {content}
      </div>
      <div className="flex justify-center">
        <button type="button" className="py-4 px-12 my-16 bg-red-600">
          <Link
            to="/productdetail"
            className="text-white font-poppins text-base font-medium"
          >
            All Products
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SliderCategory;
