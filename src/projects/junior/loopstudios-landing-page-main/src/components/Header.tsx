import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import DeviceModeContext from "../context/DeviceModeContext";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";

import { useContext, useState } from "react";

function Header() {
  const device = useContext(DeviceModeContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = () => setIsMenuOpen(true);
  const closeMenu = () => setIsMenuOpen(false);

  const Hamburger = (
    <img src={hamburger} className="hamburger" onClick={openMenu} />
  );

  return (
    <header>
      <img src={logo} className="logo" />
      {device === "mobile" ? Hamburger : <Nav />}
      <MobileMenu isOpen={isMenuOpen} onClose={closeMenu} />
    </header>
  );
}

export default Header;
