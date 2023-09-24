import "./styles/css/index.css";
import NFTImage from "./assets/images/image-equilibrium.jpg";
import ethereumIcon from "./assets/images/icon-ethereum.svg";
import clockIcon from "./assets/images/icon-clock.svg";
import avatar from "./assets/images/image-avatar.png";
import viewIcon from "./assets/images/icon-view.svg";

function App() {
  return (
    <div className="app">
      <div className="image-container">
        <img src={NFTImage} className="nft-image"></img>
        <div className="overlay">
          <img src={viewIcon}></img>
        </div>
      </div>
      <div className="nft-information">
        <h3 className="name">Equilibrium #3429</h3>
        <p className="description">
          Our Equilibrium collection promotes balance and calm.
        </p>
        <div className="availability">
          <span className="price">
            <i className="icon">
              <img src={ethereumIcon}></img>
            </i>
            0.041 ETH
          </span>
          <span className="time-remaining">
            <i className="icon">
              <img src={clockIcon}></img>
            </i>
            3 days left
          </span>
        </div>
        <div className="creator">
          <img src={avatar} className="avatar"></img>
          <p>
            Creation of <span className="name">Jules Wyvern</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
