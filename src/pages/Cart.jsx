import { Link } from "react-router-dom";
import { useGetProductQuery } from "../features/api/apiSlice";
import { Button } from "../components/common";

const Cart = () => {
  const tableRowClass =
    "flex justify-between gap-3 py-6 px-2 md:px-10 rounded shadow mb-10";
  const linkClass =
    "py-2 lg:py-4 px-6 lg:px-12 rounded border border-black border-opacity-50 font-poppins text-xs lg:text-base font-medium";

  const {
    data: product,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetProductQuery(1);

  let content;

  if (isLoading) {
    content = (
      <tr>
        <td>
          <p>Loading...</p>
        </td>
      </tr>
    );
  } else if (isSuccess) {
    content = (
      <tr className={tableRowClass}>
        <td className="w-20 lg:w-40 flex items-center gap-5">
          <img src={product.image} className="w-8" />
          <p className="truncate font-poppins font-normal text-xs md:text-base">
            {product.title}
          </p>
        </td>
        <td className="w-20 lg:w-40 place-self-center">
          <p className="font-poppins font-normal text-xs md:text-base">
            {product.price}
          </p>
        </td>
        <td className="w-20 lg:w-40 place-self-center">
          <input
            type="number"
            defaultValue={1}
            className="w-12 font-poppins font-normal text-xs md:text-base rounded border border-black border-opacity-50 pl-4"
            alt="Quantity"
          />
        </td>
        <td className="w-20 lg:w-40 place-self-center">
          <p className="font-poppins font-normal text-xs md:text-base">
            {product.price}
          </p>
        </td>
      </tr>
    );
  } else if (isError) {
    content = (
      <tr>
        <td>
          <p>{error}</p>
        </td>
      </tr>
    );
  }

  return (
    <div className="my-10">
      <h2 className="font-inter text-2xl font-medium tracking-widest mb-10">
        Cart
      </h2>
      <table className="w-full">
        <thead>
          <tr className={tableRowClass}>
            <th className="w-20 lg:w-40 text-left">
              <p className="font-poppins font-medium text-xs md:text-base">Product</p>
            </th>
            <th className="w-20 lg:w-40 text-left">
              <p className="font-poppins font-medium text-xs md:text-base">Price</p>
            </th>
            <th className="w-20 lg:w-40 text-left">
              <p className="font-poppins font-medium text-xs md:text-base">Quantity</p>
            </th>
            <th className="w-20 lg:w-40 text-left">
              <p className="font-poppins font-medium text-xs md:text-base">Subtotal</p>
            </th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
      <div className="flex justify-between mb-20">
        <Link to="/allproducts" className={linkClass}>
          Return To Shop
        </Link>
        <Link to="/cart" className={linkClass}>
          Update Cart
        </Link>
      </div>
      <div className="lg:flex lg:justify-between mb-32">
        <div>
          <input
            type="text"
            className="py-1 lg:py-4 px-2 lg:pl-4 rounded border border-black mr-4 mb-6"
            placeholder="Coupan Code"
          />
          <Button text="Apply Coupon" />
        </div>

        <div className="border-2 rounded border-black w-72 2xl:w-[30rem] py-8 px-6">
          <h3 className="font-poppins text-xl font-medium mb-6">Cart Total</h3>

          <div className="flex justify-between border-b border-black border-opacity-40 pb-4 mb-4">
            <p>Subtotal:</p>

            <p>1500$</p>
          </div>

          <div className="flex justify-between border-b border-black border-opacity-40 pb-4 mb-4">
            <p>Shipping:</p>

            <p>Free</p>
          </div>

          <div className="flex justify-between mb-4">
            <p>Total:</p>

            <p>1500$</p>
          </div>

          <div className="flex justify-center">
            <Link
              to="/checkout"
              className="font-poppins text-xs 2xl:text-base font-medium text-white py-4 px-12 bg-red-600"
            >
              Procees to checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
