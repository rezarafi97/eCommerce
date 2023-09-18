/* eslint-disable react/prop-types */
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
        <img className="h-full absolute top-0 right-0" src={product.image} />
        <div className="absolute bottom-8 left-8">
          <div className="w-60 truncate">
          <h3 className="font-inter text-2xl font-semibold">{product.title}</h3>
          </div>
          <div className="w-60 h-11 truncate"><p className="my-4 font-poppins text-sm font-normal">{product.description}</p></div>
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

export default Product;
