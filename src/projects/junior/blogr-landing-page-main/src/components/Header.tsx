import logo from "../assets/images/logo.svg";

import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

import ViewModeContext from "../context/ViewMode";
import { useContext } from "react";

function Header() {
  const device = useContext(ViewModeContext);
  const Menu = device === "mobile" ? <MobileMenu /> : <DesktopMenu />;

  return (
    <header>
      <img src={logo} />
      {Menu}
    </header>
  );
}

export default Header;
