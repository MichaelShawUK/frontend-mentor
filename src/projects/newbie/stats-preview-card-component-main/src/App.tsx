import "./styles/css/index.css";
import headerDesktop from "./assets/images/image-header-desktop.jpg";
import headerMobile from "./assets/images/image-header-mobile.jpg";
import useViewMode from "./hooks/useViewMode";

function App() {
  const viewMode = useViewMode();
  const headerImage = viewMode === "MOBILE" ? headerMobile : headerDesktop;

  return (
    <div className="app">
      <div className="information">
        <h2 className="headline">
          Get <span className="highlight">insights</span> that help your
          business grow.
        </h2>
        <p className="description">
          Discover the benefits of data analytics and make better decisions
          regarding revenue, customer experience, and overall efficiency.
        </p>
        <div className="stats">
          <div className="stat">
            <p>10k+</p>
            <h6>COMPANIES</h6>
          </div>
          <div className="stat">
            <p>314</p>
            <h6>TEMPLATES</h6>
          </div>
          <div className="stat">
            <p>12M+</p>
            <h6>QUERIES</h6>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={headerImage}></img>
        <div className="overlay"></div>
      </div>
    </div>
  );
}

export default App;
