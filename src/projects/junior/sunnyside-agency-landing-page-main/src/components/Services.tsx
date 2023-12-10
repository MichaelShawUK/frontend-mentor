import ViewMode from "../context/ViewMode";
import images from "../data/images";

import { useContext } from "react";

function Services() {
  const viewMode = useContext(ViewMode);
  const device = viewMode.toLowerCase() as "mobile" | "desktop";

  return (
    <div className={`services ${device}`}>
      <div className="transform">
        <img src={images[device].transform} />
        <div className="summary">
          <h3>Transform your brand</h3>
          <p>
            We are a full-service create agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <a href="#">LEARN MORE</a>
        </div>
      </div>
      <div className="stand-out">
        <img src={images[device].standOut} />
        <div className="summary">
          <h3>Stand out to the right audience</h3>
          <p>
            Using a collaborative forumla of designers, researchers,
            photographers, videographers, and copywriters, we'll build and
            extend your brand in digital places.
          </p>
          <a href="#">LEARN MORE</a>
        </div>
      </div>
      <div className="graphic-design">
        <img src={images[device].graphicDesign} />
        <div className="summary">
          <h4>Graphic Design</h4>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captues potential clients'
            attention.
          </p>
        </div>
      </div>
      <div className="photography">
        <img src={images[device].photography} />
        <div className="summary">
          <h4>Photography</h4>
          <p>
            Increase your credibility by getting the most stunning high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
