import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import { Drawer } from "@material-tailwind/react";
import { CiCircleRemove, CiSearch } from "react-icons/ci";

const NavbarDrawer = ({ open, closeDrawer }) => {
  const activeLink = "border-l-4 px-4";
  const normalLink = "";
  const navClass =
    "font-poppins xl:text-base lg:text-sm font-normal leading-normal mx-auto";

  return (
    <>
      <Drawer placement="top" open={open} onClose={closeDrawer} className="p-2">
        <div className="mb-2">
          <div className="flex justify-end">
            <button type="button" className="w-8 h-8" onClick={closeDrawer}>
              <CiCircleRemove className="w-full h-full" />
            </button>
          </div>

          <div className="flex flex-col justify-center items-center flex-grow gap-6">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span className={navClass}>Home</span>
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span className={navClass}>Contact</span>
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span className={navClass}>About</span>
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
            >
              <span className={navClass}>Sign Up</span>
            </NavLink>

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
          </div>
        </div>
      </Drawer>
    </>
  );
};

NavbarDrawer.propTypes = {
  closeDrawer: PropTypes.func,
  open: PropTypes.bool,
};

export default NavbarDrawer;
