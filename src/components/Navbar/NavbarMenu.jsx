import { Link } from "react-router-dom";

const NavbarMenu = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/about">About</Link>
      <Link to="/signup">Sign Up</Link>
    </div>
  );
};

export default NavbarMenu;
