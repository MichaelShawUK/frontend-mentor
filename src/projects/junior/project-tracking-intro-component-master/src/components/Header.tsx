import Nav from "./Nav";
import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close.svg";

interface Props {
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

function Header({ isMenuOpen, openMenu, closeMenu }: Props) {
  const icon = isMenuOpen ? closeIcon : hamburger;
  const menuHandler = () => (isMenuOpen ? closeMenu() : openMenu());

  return (
    <header>
      <img src={logo} className="logo" />
      <Nav />
      <img src={icon} className="icon" onClick={menuHandler} />
    </header>
  );
}

export default Header;
