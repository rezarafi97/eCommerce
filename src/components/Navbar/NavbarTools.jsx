import { CiSearch, CiHeart, CiShoppingCart, CiUser } from "react-icons/ci";

const NavbarTools = () => {
  return (
    <div className="flex gap-6">
      <div className="flex bg-searchInput rounded py-2 pl-5 pr-3 flex-auto">
        <input
          type="search"
          className="flex-auto bg-searchInput outline-none placeholder:font-poppins placeholder:text-xs placeholder:align-baseline placeholder:opacity-50"
          placeholder="What are you looking for?"
        />
        <button type="submit">
          <CiSearch className="flex-auto w-6 h-6" />
        </button>
      </div>

      <div className="flex-auto flex gap-4 h-8 self-center">
        <CiHeart className="w-full h-full" />

        <CiShoppingCart className="w-full h-full" />

        <CiUser className="w-full h-full" />
      </div>
    </div>
  );
};

export default NavbarTools;
