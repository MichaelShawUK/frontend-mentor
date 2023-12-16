import logo from "../assets/images/logo.svg";

import Nav from "./Nav";
import AccountActions from "./AccountActions";

function Header() {
  return (
    <header>
      <img src={logo} />
      <div className="nav-wrapper">
        <Nav />
        <AccountActions />
      </div>
    </header>
  );
}

export default Header;
