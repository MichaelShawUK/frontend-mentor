import logo from "../assets/images/logo.svg";
import DropdownNav from "./DropdownNav";
import ViewModeContext from "../context/ViewModeContext";
import MobileMenuIcon from "./MobileMenuIcon";
import MobileMenu from "./MobileMenu";
import { useContext, useState } from "react";

function Header() {
  const viewMode = useContext(ViewModeContext);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const onOpen = () => {
    setShowMobileMenu(true);
  };

  const onClose = () => {
    setShowMobileMenu(false);
  };

  const menu =
    viewMode === "MOBILE" ? (
      <MobileMenuIcon onClick={onOpen} />
    ) : (
      <DropdownNav mode="desktop" />
    );

  return (
    <header>
      <a href="#" className="home-logo">
        <img src={logo} />
      </a>
      {menu}
      <MobileMenu show={showMobileMenu} onClose={onClose} />
    </header>
  );
}

export default Header;
