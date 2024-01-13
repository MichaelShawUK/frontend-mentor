import logo from "../assets/images/logo.svg";

import Socials from "./Socials";
import FooterNav from "./FooterNav";

function Footer() {
  return (
    <footer>
      <div className="socials-container">
        <img src={logo} className="logo" />
        <Socials />
      </div>
      <FooterNav />
    </footer>
  );
}

export default Footer;
