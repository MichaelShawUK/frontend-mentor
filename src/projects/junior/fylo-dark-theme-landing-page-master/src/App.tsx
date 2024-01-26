import "./styles/css/index.css";

import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Features from "./components/Features";
import Summary from "./components/Summary";
import Testimonials from "./components/Testimonials";

function FyloDark() {
  return (
    <div className="fylo-dark">
      <Header />
      <main>
        <Introduction />
        <Features />
        <Summary />
        <Testimonials />
      </main>
      {/* <img
        src="src/projects/junior/fylo-dark-theme-landing-page-master/design/mobile-design.jpg"
        style={{
          display: "block",
          marginInline: "auto",
          width: "375px",
          borderTop: "red 1px solid",
        }}
      /> */}
      {/* <h4>FYLOe</h4>
      <p>FYLOe</p>
      <button>Get Started</button>
      <header>
        <nav>
          <a href="">linke</a>
        </nav>
      </header>
      <footer>
        <nav>
          <a href="">linke</a>
        </nav>
      </footer> */}
      {/* <img
        src="src/projects/junior/fylo-dark-theme-landing-page-master/design/desktop-design.jpg"
        style={{ display: "block", marginInline: "auto" }}
      /> */}
    </div>
  );
}

export default FyloDark;
