import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";
import DeviceContext from "../context/DeviceContext";

import { useContext, useState, useCallback } from "react";

function Header() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const openMenu = () => setOpenMobileMenu(true);
  const closeMenu = useCallback(() => setOpenMobileMenu(false), []);

  const Hamburger = <img src={hamburger} className="icon" onClick={openMenu} />;

  const device = useContext(DeviceContext);
  const Menu = device === "mobile" ? Hamburger : <Nav />;

  return (
    <header className={openMobileMenu ? "hidden" : undefined}>
      <img src={logo} />
      {Menu}
      {device === "mobile" && (
        <MobileMenu isOpen={openMobileMenu} onClose={closeMenu} />
      )}
    </header>
  );
}

export default Header;
