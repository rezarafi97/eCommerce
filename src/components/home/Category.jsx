import { Link } from "react-router-dom";
import { useGetAllCategoriesQuery } from "../../features/api/apiSlice";

const Category = () => {
  const {
    data: cate = [],
    isSuccess,
    isError,
    error,
  } = useGetAllCategoriesQuery();

  let content;

  if (isSuccess) {
    content = cate.map((c, index) => (
      <li key={index} className="w-52">
        <Link to="/" className="font-poppins text-base font-normal">
          {c}
        </Link>
      </li>
    ));
  } else if (isError) {
    content = <div>{error}</div>;
  }

  return (
    <div className="pt-10 pr-4 border-r-2">
      <ul className="h-80 flex flex-col justify-between">{content}</ul>
    </div>
  );
};

export default Category;
