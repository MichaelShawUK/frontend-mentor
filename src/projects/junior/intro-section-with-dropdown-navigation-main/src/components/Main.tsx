import databiz from "../assets/images/client-databiz.svg";
import audiophile from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";
import maker from "../assets/images/client-maker.svg";
import desktopHero from "../assets/images/image-hero-desktop.png";
import mobileHero from "../assets/images/image-hero-mobile.png";
import ViewModeContext from "../context/ViewModeContext";
import { useContext } from "react";

function Main() {
  const viewMode = useContext(ViewModeContext);

  const hero = viewMode === "MOBILE" ? mobileHero : desktopHero;
  return (
    <main>
      <div className="summary">
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
        <section className="clients">
          <a href="">
            <img src={databiz} />
          </a>
          <a href="">
            <img src={audiophile} />
          </a>
          <a href="">
            <img src={meet} />
          </a>
          <a href="">
            <img src={maker} />
          </a>
        </section>
      </div>
      <div className="hero">
        <img src={hero} />
      </div>
    </main>
  );
}

export default Main;
