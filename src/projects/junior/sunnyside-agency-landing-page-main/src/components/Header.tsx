import logo from "../assets/images/logo.svg";
import ViewMode from "../context/ViewMode";
import images from "../data/images";

import { useContext } from "react";

function Header() {
  const viewMode = useContext(ViewMode);
  const device = viewMode.toLowerCase() as "desktop" | "mobile";
  const background = images[device].header;

  return (
    <div className="header-wrapper">
      <img src={background} className="background" />
      <header>
        <img src={logo} />
        <p>Header</p>
      </header>
    </div>
  );
}

export default Header;
