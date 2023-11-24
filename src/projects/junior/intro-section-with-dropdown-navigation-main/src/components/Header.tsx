import logo from "../assets/images/logo.svg";
import DropdownNav from "./DropdownNav";
import ViewModeContext from "../context/ViewModeContext";
import MobileMenuIcon from "./MobileMenuIcon";
import { useContext } from "react";

function Header() {
  const viewMode = useContext(ViewModeContext);

  const menu = viewMode === "MOBILE" ? <MobileMenuIcon /> : <DropdownNav />;

  return (
    <header>
      <a href="#" className="home-logo">
        <img src={logo} />
      </a>
      {menu}
    </header>
  );
}

export default Header;
