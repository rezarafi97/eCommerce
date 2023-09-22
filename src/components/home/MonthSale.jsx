import { Link } from "react-router-dom";
import { useGetLimitedProductsQuery } from "../../features/api/apiSlice";
import { Title, Card } from "../common";

const MonthSale = () => {
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
      <Title title="This Month" />
      <div className="flex justify-between mb-16">
        <div className="flex items-end">
          <p className="font-inter text-xl md:text-4xl font-semibold tracking-widest">
            Best Selling Products
          </p>
        </div>

        <div>
          <button type="button" className="py-2 px-8 lg:py-4 lg:px-12 bg-red-600">
            <Link
              to="/productdetail"
              className="text-white font-poppins text-xs lg:text-base font-medium"
            >
              All Products
            </Link>
          </button>
        </div>
      </div>
      <div className="mt-10 w-full whitespace-nowrap overflow-x-scroll snap-x mb-36">
        {content}
      </div>
    </div>
  );
};

export default MonthSale;
