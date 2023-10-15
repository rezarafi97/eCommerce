import { useGetProductQuery } from "../features/api/apiSlice";

const Cart = () => {
  const tableRowClass = "flex justify-between py-6 px-10 rounded shadow mb-10";

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
        <td className="flex items-center gap-5 w-40">
          <img src={product.image} className="w-12" />
          <p className="w-24 truncate font-poppins font-normal text-base">
            {product.title}
          </p>
        </td>
        <td className="w-40 place-self-center">
          <p className="w-24 truncate font-poppins font-normal text-base">
            {product.price}
          </p>
        </td>
        <td className="w-40 place-self-center">
          <p className="w-24 truncate font-poppins font-normal text-base">1</p>
        </td>
        <td className="w-40 place-self-center">
          <p className="w-24 truncate font-poppins font-normal text-base">
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
            <th className="w-40 text-left">Product</th>
            <th className="w-40 text-left">Price</th>
            <th className="w-40 text-left">Quantity</th>
            <th className="w-40 text-left">Subtotal</th>
          </tr>
        </thead>
        <tbody>{content}</tbody>
      </table>
      <div></div>
    </div>
  );
};

export default Cart;
