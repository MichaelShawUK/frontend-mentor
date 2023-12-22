import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close-menu.svg";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";
import DeviceContext from "../context/DeviceContext";

import { useContext, useState } from "react";

function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const openMenu = () => setOpenMobileMenu(true);
  const closeMenu = () => setOpenMobileMenu(false);

  const Hamburger = <img src={hamburger} className="icon" onClick={openMenu} />;
  const CloseIcon = (
    <img src={closeIcon} className="icon" onClick={closeMenu} />
  );
  const Icon = openMobileMenu ? CloseIcon : Hamburger;

  const device = useContext(DeviceContext);
  const Menu = device === "mobile" ? Icon : <Nav />;

  return (
    <header>
      <img src={logo} />
      {Menu}
      {device === "mobile" && <MobileMenu isOpen={openMobileMenu} />}
    </header>
  );
}

export default Header;
