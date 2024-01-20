import logo from "../assets/images/logo.svg";
import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import instagram from "../assets/images/icon-instagram.svg";

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
      <ul className="socials">
        <li>
          <a href="#facebook">
            <img src={facebook} className="icon" />
          </a>
        </li>
        <li>
          <a href="#twitter">
            <img src={twitter} className="icon" />
          </a>
        </li>
        <li>
          <a href="#instagram">
            <img src={instagram} className="icon" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
