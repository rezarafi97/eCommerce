import {
  CiSearch,
  CiHeart,
  CiShoppingCart,
  CiUser,
  CiMenuBurger,
} from "react-icons/ci";

const NavbarTools = () => {
  return (
    <>
      <div className="flex gap-6">
        <div className="hidden md:flex bg-searchInput rounded py-2 pl-5 pr-3 flex-auto">
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
          <button type="button" className="md:hidden w-full h-full">
            <CiSearch className="w-full h-full" />
          </button>

          <CiHeart className="w-full h-full cursor-pointer" />

          <CiShoppingCart className="w-full h-full cursor-pointer" />

          <CiUser className="w-full h-full cursor-pointer" />

          <button type="button" className="md:hidden w-full h-full">
            <CiMenuBurger className="w-full h-full" />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavbarTools;
