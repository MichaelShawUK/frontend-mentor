import useDevice from "../hooks/useDevice";

import logo from "../assets/images/logo.svg";
import avatar from "../assets/images/image-avatar.png";
import cart from "../assets/images/icon-cart.svg";
import menu from "../assets/images/icon-menu.svg";

import Nav from "./Nav";

interface Props {
  onOpen: () => void;
}

function Header({ onOpen }: Props) {
  const device = useDevice();

  return (
    <header>
      {device === "mobile" && (
        <button onClick={onOpen}>
          <img src={menu} className="menu" />
        </button>
      )}
      <img src={logo} className="logo" />
      {device === "desktop" && <Nav />}
      <button>
        <img src={cart} className="cart" />
      </button>
      <button>
        <img src={avatar} className="avatar" />
      </button>
    </header>
  );
}

export default Header;
