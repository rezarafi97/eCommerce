import { NavLink } from "react-router-dom";

const NavbarMenu = () => {
  const activeLink = "after:block after:w-auto after:h-0.5 after:opacity-5 after:bg-black";
  const normalLink = "";
  const navClass = "font-poppins text-base font-normal leading-normal";

  return (
    <div className="flex gap-12 place-items-center">
      <NavLink to="/" className={({isActive}) => (isActive ? activeLink : normalLink)}>
        <span className={navClass}>Home</span>
      </NavLink>
      <NavLink to="/contact" className={({isActive}) => (isActive ? activeLink : normalLink)}>
        <span className={navClass}>Contact</span>
      </NavLink>
      <NavLink to="/about" className={({isActive}) => (isActive ? activeLink : normalLink)}>
        <span className={navClass}>About</span>
      </NavLink>
      <NavLink to="/signup" className={({isActive}) => (isActive ? activeLink : normalLink)}>
        <span className={navClass}>Sign Up</span>
      </NavLink>
    </div>
  );
};

export default NavbarMenu;
