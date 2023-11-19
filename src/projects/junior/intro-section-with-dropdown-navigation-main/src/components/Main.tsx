import databiz from "../assets/images/client-databiz.svg";
import audiophile from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";
import maker from "../assets/images/client-maker.svg";
import desktopHero from "../assets/images/image-hero-desktop.png";

function Main() {
  return (
    <main>
      <div className="summary">
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
        <section>
          <img src={databiz} />
          <img src={audiophile} />
          <img src={meet} />
          <img src={maker} />
        </section>
      </div>
      <img src={desktopHero} />
    </main>
  );
}

export default Main;
