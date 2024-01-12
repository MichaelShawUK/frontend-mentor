import mobileHero from "../assets/images/image-intro-mobile.jpg";
import desktopHero from "../assets/images/image-intro-desktop.jpg";

import DeviceModeContext from "../context/DeviceModeContext";

import { useContext } from "react";

function Hero() {
  const device = useContext(DeviceModeContext);

  const image = device === "mobile" ? mobileHero : desktopHero;

  return (
    <section className="hero">
      <img src={image} />
      <div className="introduction">
        <h1>Humanizing your insurance.</h1>
        <p>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that's right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button>VIEW PLANS</button>
      </div>
    </section>
  );
}

export default Hero;
