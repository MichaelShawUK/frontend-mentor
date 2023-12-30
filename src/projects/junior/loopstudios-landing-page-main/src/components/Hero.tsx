import heroDesktop from "../assets/images/desktop/image-hero.jpg";
import heroMobile from "../assets/images/mobile/image-hero.jpg";
import DeviceModeContext from "../context/DeviceModeContext";

import { useContext } from "react";

function Hero() {
  const device = useContext(DeviceModeContext);

  const hero = device === "mobile" ? heroMobile : heroDesktop;

  return (
    <div className="hero">
      <img src={hero} />
      <h1>IMMERSIVE EXPERIENCES THAT DELIVER</h1>
    </div>
  );
}

export default Hero;
