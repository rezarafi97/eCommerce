import { Carousel } from "@material-tailwind/react";
import { useGetLimitedProductsQuery } from "../../features/api/apiSlice";
import { Link } from "react-router-dom";
import { HiArrowLongRight } from "react-icons/hi2";

const SliderLand = () => {
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
      <div className="w-full h-full flex" key={p.id}>
        <div className="w-1/2 flex flex-col justify-around py-4">
          <h4 className="font-inter text-5xl">{p.title}</h4>
          <div className="flex gap-2">
            <Link to="/productdetail">
              <span className="underline font-poppins text-base underline-offset-8 font-medium">
                Shop Now
              </span>
            </Link>
            <Link to="/productdetail">
              <HiArrowLongRight className="w-full h-full" />
            </Link>
          </div>
        </div>
        <div className="bg-white h-full w-1/2 flex justify-center">
          <img src={p.image} alt={p.title} className="h-full" />
        </div>
      </div>
    ));
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <div className="mt-10 ml-11 w-full h-80">
      <Carousel
        prevArrow={() => null}
        nextArrow={() => null}
        autoplay={true}
        autoplayDelay={10000}
        loop={true}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i
                    ? "w-8 bg-blue-gray-600"
                    : "w-4 bg-blue-gray-800"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {content}
      </Carousel>
    </div>
  );
};

export default SliderLand;
