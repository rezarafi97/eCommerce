import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  const inputClass =
    "flex-auto bg-searchInput outline-none placeholder:font-poppins placeholder:text-xs placeholder:align-baseline placeholder:opacity-50";

  return (
    <div className="hidden md:flex bg-searchInput rounded py-2 pl-5 pr-3 flex-auto">
      <input
        type="search"
        className={inputClass}
        placeholder="What are you looking for?"
      />
      <button type="submit">
        <CiSearch className="flex-auto w-6 h-6" />
      </button>
    </div>
  );
};

export default SearchInput;
