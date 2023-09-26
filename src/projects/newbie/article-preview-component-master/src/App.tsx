import "./styles/css/index.css";
import drawers from "./assets/images/drawers.jpg";
import avatar from "./assets/images/avatar-michelle.jpg";
import whiteShareIcon from "./assets/images/icon-share-white.svg";
import shareIcon from "./assets/images/icon-share.svg";
import facebook from "./assets/images/icon-facebook.svg";
import twitter from "./assets/images/icon-twitter.svg";
import pinterest from "./assets/images/icon-pinterest.svg";

import { useState } from "react";

function App() {
  const [showSocials, setShowSocials] = useState(false);

  function toggleSocials() {
    setShowSocials((previousState) => !previousState);
  }

  return (
    <div className="container">
      <article className="app">
        <div className="image-container">
          <img src={drawers}></img>
        </div>
        <section className="article">
          <h2>
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h2>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I've got some simple tips to help
            you make any room feel complete.
          </p>
          <div className="article-data">
            <img className="avatar" src={avatar}></img>
            <p className="author">Michelle Appleton</p>
            <p className="date">28 Jun 2020</p>
            <div className="social-media">
              <img
                onClick={toggleSocials}
                className="share-icon"
                src={shareIcon}
              ></img>
              {showSocials && (
                <div className="links">
                  <p>SHARE</p>
                  <img src={facebook}></img>
                  <img src={twitter}></img>
                  <img src={pinterest}></img>
                </div>
              )}
            </div>
          </div>
        </section>
        {showSocials && (
          <div className="links">
            <p>SHARE</p>
            <img src={facebook}></img>
            <img src={twitter}></img>
            <img src={pinterest}></img>
            <img
              onClick={toggleSocials}
              className="share-icon"
              src={whiteShareIcon}
            ></img>
          </div>
        )}
      </article>
    </div>
  );
}

export default App;
