import { NavLink } from "react-router-dom";

const NavbarMenu = () => {
  const activeLink =
    "after:block after:w-auto after:h-px after:opacity-5 after:bg-black";
  const normalLink = "";
  const navClass = "font-poppins xl:text-base lg:text-sm font-normal leading-normal";

  return (
    <div className="hidden lg:flex xl:gap-12 lg:gap-8 place-items-center">
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
    </div>
  );
};

export default NavbarMenu;
