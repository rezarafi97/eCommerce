import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { NavbarDrawer } from ".";
import {
  CiSearch,
  CiHeart,
  CiShoppingCart,
  CiUser,
  CiMenuBurger,
  CiShoppingBasket,
  CiLogout,
} from "react-icons/ci";

import { useSelector } from "react-redux";
import { selectLogin } from "../../features/reducers/userSlice";

import { useDispatch } from "react-redux";
import { logout } from "../../features/reducers/userSlice";

const NavbarTools = () => {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [login, setLogin] = useState(null);

  const log = useSelector(selectLogin);
  const dispatch = useDispatch();

  let location = useLocation();
  const navigate = useNavigate();

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const dropdownToggle = () => {
    setDropdown((prev) => !prev);
  };

  useEffect(() => {
    setLogin(log);
  }, [log]);

  const iconsClass = "w-full h-full cursor-pointer";
  const inputClass =
    "flex-auto bg-searchInput outline-none placeholder:font-poppins placeholder:text-xs placeholder:align-baseline placeholder:opacity-50";
  const dropdownClass =
    "absolute right-1 top-10 bg-black opacity-40 rounded w-56 flex flex-col py-4 pl-6 justify-center items-start gap-3 z-10";
  const dropdownMenuClass = "flex flex-auto gap-4 cursor-pointer";

  return (
    <>
      <div className="flex gap-6">
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

        {location.pathname === "/signup" ||
        location.pathname === "/login" ? null : (
          <div className="relative">
            <div className="flex-auto flex gap-4 h-6 lg:h-8 self-center">
              <CiHeart className={iconsClass} />
              <CiShoppingCart className={iconsClass} />
              {login ? (
                <CiUser className={iconsClass} onClick={dropdownToggle} />
              ) : null}
              {dropdown ? (
                <div className={dropdownClass}>
                  <div
                    className={dropdownMenuClass}
                    onClick={() => {
                      navigate("/account");
                      setDropdown(false);
                    }}
                  >
                    <CiUser className="text-white w-8 h-8" />
                    <p className="text-white font-poppins text-sm font-normal mt-2">
                      My Account
                    </p>
                  </div>
                  <div
                    className={dropdownMenuClass}
                    onClick={() => {
                      navigate("/cart");
                      setDropdown(false);
                    }}
                  >
                    <CiShoppingBasket className="text-white w-8 h-8" />
                    <p className="text-white">My Order</p>
                  </div>
                  <div
                    className={dropdownMenuClass}
                    onClick={() => {
                      dispatch(logout());
                      {
                        dropdownMenuClass;
                      }
                      setDropdown(false);
                    }}
                  >
                    <CiLogout className="text-white w-8 h-8" />
                    <p className="text-white">Log Out</p>
                  </div>
                </div>
              ) : null}
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
        )}
      </div>
    </>
  );
};

export default NavbarTools;
