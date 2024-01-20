import logo from "../assets/images/logo.svg";
import Socials from "./Socials";

function Footer() {
  return (
    <footer>
      <img src={logo} className="logo" />
      <nav>
        <ul>
          <li>
            <a href="#faq">FAQs</a>
          </li>
          <li>
            <a href="#contact">Contact Us</a>
          </li>
          <li>
            <a href="#privacy">Privacy Policy</a>
          </li>
          <li>
            <a href="#press">Press Kit</a>
          </li>
          <li>
            <a href="#install">Install Guide</a>
          </li>
        </ul>
      </nav>
      <Socials />
    </footer>
  );
}

export default Footer;
