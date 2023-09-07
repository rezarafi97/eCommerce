import { Link } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../features/api/apiSlice";

const Category = () => {
  const {
    data: cate = [],
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetAllCategoriesQuery();

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    content = cate.map((c, index) => (
      <li key={index} className="mt-4">
        <Link to="/" className="font-poppins text-base font-normal">
          {c}
        </Link>
      </li>
    ));
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <div className="pt-6 pr-4 border-r-2">
      <ul>{content}</ul>
    </div>
  );
};

export default Category;
