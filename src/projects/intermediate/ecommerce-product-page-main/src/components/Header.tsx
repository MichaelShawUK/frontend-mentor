import useDevice from "../hooks/useDevice";

import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/image-avatar.png";
import cart from "../assets/images/icon-cart.svg";
import menu from "../assets/images/icon-menu.svg";

import Nav from "./Nav";

function Header() {
  const device = useDevice();

  return (
    <header>
      {device === "mobile" && <img src={menu} className="menu" />}
      <img src={logo} className="logo" />
      {device === "desktop" && <Nav />}
      <img src={cart} className="cart" />
      <img src={avatar} className="avatar" />
    </header>
  );
}

export default Header;
