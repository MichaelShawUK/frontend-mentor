import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import Nav from "./Nav";
import DeviceContext from "../context/DeviceContext";

import { useContext } from "react";

function Header() {
  const device = useContext(DeviceContext);
  const Hamburger = <img src={hamburger} className="hamburger" />;
  const Menu = device === "mobile" ? Hamburger : <Nav />;

  return (
    <header>
      <img src={logo} />
      {Menu}
    </header>
  );
}

export default Header;
