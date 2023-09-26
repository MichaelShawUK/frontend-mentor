import woman from "../assets/images/illustration-woman-online-mobile.svg";
import background from "../assets/images/bg-pattern-mobile.svg";

function MobileIllustration() {
  return (
    <div className="mobile illustration">
      <img className="background" src={background}></img>
      <img className="woman" src={woman}></img>
    </div>
  );
}

export default MobileIllustration;
