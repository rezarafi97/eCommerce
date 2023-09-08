import { Carousel } from "@material-tailwind/react";

const SliderLand = () => {
  return (
    <div className="mt-10 ml-11 w-full">
      <Carousel
        prevArrow={() => null}
        nextArrow={() => null}
        autoplay={true}
        autoplayDelay={10000}
        loop={true}
      >
        <div className="w-full h-full bg-blue-gray-800">1</div>
        <div className="w-full h-full bg-blue-gray-800">2</div>
        <div className="w-full h-full bg-blue-gray-800">3</div>
        <div className="w-full h-full bg-blue-gray-800">4</div>
        <div className="w-full h-full bg-blue-gray-800">5</div>
      </Carousel>
    </div>
  );
};

export default SliderLand;
