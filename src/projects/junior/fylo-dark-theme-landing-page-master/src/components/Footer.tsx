import logo from "../assets/images/logo.svg";
import Socials from "./Socials";

function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <img src={logo} className="logo" />
        <div className="flex-container">
          <ul className="contact">
            <li className="address">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Veritatis iusto aliquid id eum enim quos soluta
            </li>
            <li className="phone">+1-012-345-6789</li>
            <li className="email">example@fylo.com</li>
          </ul>
          <nav>
            <a href="#about">About Us</a>
            <a href="#jobs">Jobs</a>
            <a href="#press">Press</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact Us</a>
            <a href="#terms">Terms</a>
            <a href="#privacy">Privacy</a>
          </nav>
          <Socials />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
