import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import Nav from "./Nav";
import DeviceModeContext from "../context/DeviceModeContext";

import { useContext } from "react";

function Header() {
  const device = useContext(DeviceModeContext);

  return (
    <header>
      <img src={logo} />
      {device === "mobile" ? <img src={hamburger} /> : <Nav />}
    </header>
  );
}

export default Header;
