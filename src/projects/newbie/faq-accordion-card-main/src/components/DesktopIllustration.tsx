import woman from "../assets/images/illustration-woman-online-desktop.svg";
import background from "../assets/images/bg-pattern-desktop.svg";
// import box from "../assets/images/illustration-box-desktop.svg";

function DesktopIllustration() {
  return (
    <div className="desktop illustration">
      <img className="background" src={background}></img>
      <img src={woman}></img>
      {/* <img className="box" src={box}></img> */}
    </div>
  );
}

export default DesktopIllustration;
