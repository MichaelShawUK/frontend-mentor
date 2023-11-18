import logo from "../assets/images/logo.svg";
import DropdownNav from "./DropdownNav";

function Header() {
  return (
    <header>
      <a href="#" className="home-logo">
        <img src={logo} />
      </a>
      <DropdownNav />
    </header>
  );
}

export default Header;
