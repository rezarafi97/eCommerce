import { useState } from "react";

import { useGetLimitedProductsQuery } from "../../features/api/apiSlice";
import { Card, Timer, Title, Button } from "../common";

/* eslint-disable react/no-unescaped-entities */
const TodaySale = () => {
  const [timer, setTimer] = useState({});

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
    content = products.map((p) => <Card p={p} key={p.id} discount={1} />);
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <div>
          <Title title="Today's" />
        <div className="flex justify-between">
          <div className="flex gap-20">
            <div className="flex items-end">
              <p className="font-inter text-xl md:text-4xl font-semibold tracking-widest">
                Flash Sales
              </p>
            </div>
            <Timer timer={timer} setTimer={setTimer}  />
          </div>
        </div>
      </div>
      <div className="mt-10 w-full whitespace-nowrap overflow-x-scroll snap-x">
        {content}
      </div>
      <div className="flex justify-center my-16">
        <Button text="All Products" />
      </div>
    </div>
  );
};

export default TodaySale;
