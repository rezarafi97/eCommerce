import { useState } from "react";
import { NavbarDrawer } from "./";

import {
  CiSearch,
  CiHeart,
  CiShoppingCart,
  CiUser,
  CiMenuBurger,
} from "react-icons/ci";

const NavbarTools = () => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const iconsClass = "w-full h-full cursor-pointer"

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

        <div className="flex-auto flex gap-4 h-6 lg:h-8 self-center">
          <CiHeart className={iconsClass} />

          <CiShoppingCart className={iconsClass} />

          <CiUser className={iconsClass} />

          <button
            type="button"
            className="lg:hidden w-full h-full"
            onClick={openDrawer}
          >
            <CiMenuBurger className="w-full h-full" />
          </button>

          <NavbarDrawer open={open} closeDrawer={closeDrawer} />
        </div>
      </div>
    </>
  );
};

export default NavbarTools;
