import interactiveDesktop from "../assets/images/desktop/image-interactive.jpg";
import interactiveMobile from "../assets/images/mobile/image-interactive.jpg";
import DeviceModeContext from "../context/DeviceModeContext";

import { useContext } from "react";

function Summary() {
  const device = useContext(DeviceModeContext);
  const interactive =
    device === "mobile" ? interactiveMobile : interactiveDesktop;

  return (
    <div className="summary">
      <img src={interactive} />
      <div>
        <h2>THE LEADER IN INTERACTIVE VR</h2>
        <p>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
}

export default Summary;
