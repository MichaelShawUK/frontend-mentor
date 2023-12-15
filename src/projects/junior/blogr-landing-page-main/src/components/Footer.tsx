import logo from "../assets/images/logo.svg";

import Nav from "./Nav";

function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">
        <img src={logo} className="logo" />
        <Nav />
      </div>
    </footer>
  );
}

export default Footer;
