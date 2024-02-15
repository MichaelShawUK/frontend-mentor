import useDevice from "../hooks/useDevice";
import { useAppSelector } from "../hooks/useStore";
import { selectCartQuantity } from "../app/cartSlice";

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

  const cartQuantity = useAppSelector(selectCartQuantity);

  return (
    <header>
      {device === "mobile" && (
        <button onClick={onOpen}>
          <img src={menu} className="menu" />
        </button>
      )}
      <img src={logo} className="logo" />
      {device === "desktop" && <Nav />}
      <button className="cart-btn">
        <img src={cart} className="cart" />
        {cartQuantity > 0 && <span>{cartQuantity}</span>}
      </button>
      <button>
        <img src={avatar} className="avatar" />
      </button>
    </header>
  );
}

export default Header;
