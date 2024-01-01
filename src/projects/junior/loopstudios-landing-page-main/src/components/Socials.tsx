import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import pinterest from "../assets/images/icon-pinterest.svg";
import instagram from "../assets/images/icon-instagram.svg";

function Socials() {
  return (
    <div className="socials">
      <div className="icon">
        <img src={facebook} />
      </div>
      <div className="icon">
        <img src={twitter} />
      </div>
      <div className="icon">
        <img src={pinterest} />
      </div>
      <div className="icon">
        <img src={instagram} />
      </div>
    </div>
  );
}

export default Socials;
