import { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../../images/logo.png";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);
  return (
    <nav className="py-[1.8rem] px-[3rem] shadow-md">
      <div className="flex w-full">
        <div className="flex w-full justify-between">
          <Link to={"/"} className="flex items-center w-[90px]">
            <img src={logoImg} alt="Logo" />
            <span className="text-3xl font-bold text-black">BOOKHUB</span>
          </Link>
          <button onClick={handleNavbar} className="z-[11] lg:hidden">
            <HiOutlineMenuAlt3
              size={35}
              style={{ color: `${toggleMenu ? "#010101"  :"#fff" }` }}
            />
          </button>
        </div>

        <div
          className={
            toggleMenu
              ? "fixed top-0 right-0 z-[10] bg-custom-black h-full w-[280px] flex px-[3rem] pt-[10rem] translate-x-[100%] transition-all lg:p-0 lg:w-full lg:relative lg:h-auto lg:bg-transparent lg:translate-x-0 lg:justify-end"
              : "translate-x-0 fixed top-0 right-0 z-[10] bg-custom-black h-full w-[280px] flex px-[3rem] pt-[10rem] transition-all lg:p-0 lg:w-full lg:relative lg:h-auto lg:bg-transparent lg:translate-x-0 lg:justify-end"
          }
        >
          <ul className="text-white lg:text-custom-black lg:text-[1.7rem] lg:font-[500] lg:flex lg:items-center">
            <li className="mb-[4rem] lg:mb-0 lg:ml-[2.8rem]">
              <Link className="hover:text-custom-purple transition-all" to={"/"}>HOME</Link>
            </li>

            <li className="mb-[4rem] lg:mb-0 lg:ml-[2.8rem]">
              <Link className="hover:text-custom-purple transition-all" to={"about"}>ABOUT</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
