import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";
import DeviceContext from "../context/DeviceContext";

import { useContext, useState } from "react";
import { createPortal } from "react-dom";

function Header() {
  const appElement = document.querySelector(".crowdfund")!;
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const openMenu = () => setOpenMobileMenu(true);
  const closeMenu = () => setOpenMobileMenu(false);

  const Hamburger = <img src={hamburger} className="icon" onClick={openMenu} />;

  const device = useContext(DeviceContext);
  const Menu = device === "mobile" ? Hamburger : <Nav />;

  return (
    <header className={openMobileMenu ? "hidden" : undefined}>
      <img src={logo} />
      {Menu}
      {device === "mobile" &&
        createPortal(
          <MobileMenu
            isOpen={openMobileMenu}
            onClose={closeMenu}
            setMenuIsOpen={setOpenMobileMenu}
          />,
          appElement
        )}
    </header>
  );
}

export default Header;
