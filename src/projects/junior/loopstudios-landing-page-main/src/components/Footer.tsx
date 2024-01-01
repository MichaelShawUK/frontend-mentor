import logo from "../assets/images/logo.svg";
import Nav from "./Nav";
import Socials from "./Socials";

function Footer() {
  return (
    <footer>
      <div className="grid-container">
        <img src={logo} className="logo" />
        <Nav />
        <Socials />
        <p className="copyright">
          &#169; 2024 Loopstudios. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
