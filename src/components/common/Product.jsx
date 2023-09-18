import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";

const Product = ({ productId }) => {
  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductQuery(productId);

  let content;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (isSuccess) {
    content = (
      <div>
        <img className="w-1/2 absolute top-0 right-0" src={product.image} />
        <div className="absolute bottom-8 left-8">
          <div className="w-60">
            <h3 className="font-inter text-2xl font-semibold truncate">
              {product.title}
            </h3>
          </div>
          <div className="w-60 h-11">
            <p className="my-4 font-poppins text-sm font-normal truncate">
              {product.description}
            </p>
          </div>
          <Link to="/productdetail">
            <span className="underline font-poppins text-base underline-offset-8 font-medium">
              Shop Now
            </span>
          </Link>
        </div>
      </div>
    );
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return <div>{content}</div>;
};

Product.propTypes = {
  productId: PropTypes.string,
};

export default Product;
