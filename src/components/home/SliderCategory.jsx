import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { endOfToday, intervalToDuration } from "date-fns";
import { useGetLimitedProductsQuery } from "../../features/api/apiSlice";
import { BsSuitHeart, BsEye, BsStarFill } from "react-icons/bs";

/* eslint-disable react/no-unescaped-entities */
const SliderCategory = () => {
  const [timer, setTimer] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(
        intervalToDuration({
          start: new Date(),
          end: endOfToday(),
        })
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

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
    content = products.map((p) => (
      <div className="h-96 w-64" key={p.id}>
        <div className="w-full h-64 relative mb-4">
          <div>
            <div className="bg-red-500 px-3 py-1 inline-block rounded">
              <p className="font-poppins text-white text-xs font-normal">
                -20%
              </p>
            </div>
          </div>
          <div className="absolute top-3 right-3">
            <BsSuitHeart className="w-6 h-6" />
            <BsEye className="w-6 h-6 mt-2" />
          </div>
          <img src={p.image} className="w-40 h-40 absolute left-12 top-12" />
        </div>
        <div>
          <h3>{p.title}</h3>
          <div className="flex gap-3">
            <p>${p.price}</p>
            <p>${Math.floor(p.price * 80) / 100}</p>
          </div>
          <div className="flex gap-1">
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
            <BsStarFill />
          </div>
        </div>
      </div>
    ));
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <div>
      <div>
        <div className="flex gap-4 mb-6">
          <div className="bg-red-600 w-5 h-10 rounded"></div>
          <div className="flex items-center">
            <p className="font-poppins text-base font-semibold text-red-600">
              Today's
            </p>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex items-end">
            <p className="font-inter text-4xl font-semibold tracking-widest">
              Flash Sales
            </p>
          </div>
          <div className="flex gap-4">
            <div>
              <p className="font-poppins text-xs font-medium">Hours</p>
              <p className="font-inter text-4xl font-bold tracking-widest">
                {timer.hours < 9 ? "0" + timer.hours : timer.hours}
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-red-500 text-3xl font-black">:</p>
            </div>
            <div>
              <p className="font-poppins text-xs font-medium">Minutes</p>
              <p className="font-inter text-4xl font-bold tracking-widest">
                {timer.minutes < 9 ? "0" + timer.minutes : timer.minutes}
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-red-500 text-3xl font-black">:</p>
            </div>
            <div>
              <p className="font-poppins text-xs font-medium">Seconds</p>
              <p className="font-inter text-4xl font-bold tracking-widest">
                {timer.seconds < 9 ? "0" + timer.seconds : timer.seconds}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 flex gap-3.5 flex-wrap">{content}</div>
      <div className="flex justify-center">
        <button type="button" className="py-4 px-12 my-16 bg-red-600">
          <Link
            to="/productdetail"
            className="text-white fonter-poppins text-base font-medium"
          >
            All Products
          </Link>
        </button>
      </div>
    </div>
  );
};

export default SliderCategory;
