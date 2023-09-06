import { Link } from "react-router-dom";

const FooterAccount = () => {
  return (
    <div>
      <ul>
        <li>
          <h3 className="text-white text-xl font-poppins font-medium mb-6">Account</h3>
        </li>
        <li>
          <Link to="/" className="text-white text-base font-poppins font-normal mb-4">
            My Account
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white text-base font-poppins font-normal mb-4">
            Login/Register
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white text-base font-poppins font-normal mb-4">
            Cart
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white text-base font-poppins font-normal mb-4">
            Wishlist
          </Link>
        </li>
        <li>
          <Link to="/" className="text-white text-base font-poppins font-normal">
            Shop
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterAccount;
