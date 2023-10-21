import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Button = ({ text }) => {
  const buttonClass =
    "py-2 lg:py-4 px-8 lg:px-12 bg-red-600 text-white font-poppins text-xs lg:text-base font-medium";

  return (
    <>
      <Link to="/productdetail" className={buttonClass}>
        {text}
      </Link>
    </>
  );
};

Button.propTypes = {
  text: PropTypes.string,
};

export default Button;
