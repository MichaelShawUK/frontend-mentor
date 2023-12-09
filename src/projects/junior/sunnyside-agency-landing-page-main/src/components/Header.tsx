import logo from "../assets/images/logo.svg";
import ViewMode from "../context/ViewMode";
import images from "../data/images";
import MobileMenu from "./MobileMenu";
import Nav from "./Nav";

import { useContext } from "react";

function Header() {
  const viewMode = useContext(ViewMode);
  const device = viewMode.toLowerCase() as "desktop" | "mobile";
  const background = images[device].header;

  const menu = viewMode === "MOBILE" ? <MobileMenu /> : <Nav />;

  return (
    <div className="header-wrapper">
      <img src={background} className="background" />
      <header>
        <div className="nav-wrapper">
          <img src={logo} />
          {menu}
        </div>
      </header>
    </div>
  );
}

export default Header;
