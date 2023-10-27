import PropTypes from "prop-types";

import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { Card } from "../common";

const ProductsList = ({
  text,
  index,
  setIndex,
  products,
  isLoading,
  isSuccess,
  isError,
  error,
}) => {
  const prevHandler = () => {
    setIndex((prev) => prev - 1);
  };

  const nextHandler = () => {
    setIndex((prev) => prev + 1);
  };

  const pageHandler = (item) => {
    setIndex(item);
  };

  let content;
  let paginate;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    paginate = products.slice(index * 12, index * 12 + 12);
    content = paginate.map((p) => <Card p={p} key={p.id} discount={3} />);
  } else if (isError) {
    content = <div>{error}</div>;
  }

  const numClass =
    "cursor-pointer font-poppins text-base font-normal opacity-70";

  return (
    <div>
      <div className="flex justify-between items-center mb-16">
        <p className="font-inter text-xl md:text-4xl font-semibold tracking-widest capitalize">
          {text}
        </p>
        <p className="font-poppins text-base font-normal">Page {index + 1}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {content}
      </div>
      <div className="flex gap-12 justify-center items-center mt-8">
        <button type="button" onClick={prevHandler} disabled={index === 0}>
          <GrLinkPrevious className="w-6 h-6" />
        </button>

        <p
          className={numClass}
          onClick={() => pageHandler(index - 1)}
          hidden={index <= 0}
        >
          {index}
        </p>
        <p
          className="cursor-pointer font-poppins text-base font-medium"
          onClick={() => pageHandler(index)}
          disabled
        >
          {index + 1}
        </p>
        <p
          className={numClass}
          onClick={() => pageHandler(index + 1)}
          hidden={index >= Math.floor(products.length / 12)}
        >
          {index + 2}
        </p>

        <button
          type="button"
          onClick={nextHandler}
          disabled={index === Math.floor(products.length / 12)}
        >
          <GrLinkNext className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

ProductsList.propTypes = {
  text: PropTypes.string,
  index: PropTypes.number,
  setIndex: PropTypes.func,
  products: PropTypes.array,
  isLoading: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isError: PropTypes.bool,
  error: PropTypes.bool,
};

export default ProductsList;
