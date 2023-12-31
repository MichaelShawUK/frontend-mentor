import { useContext } from "react";

import DeviceModeContext from "../context/DeviceModeContext";

import images from "../data/creationImages";
import Creation from "./Creation";

function Creations() {
  const device = useContext(DeviceModeContext);

  return (
    <div className="creations">
      <h2>OUR CREATIONS</h2>
      <button>SEE ALL</button>
      <div className="grid-container">
        <Creation title="DEEP EARTH" image={images[device].earth} />
        <Creation title="NIGHT ARCADE" image={images[device].arcade} />
        <Creation title="SOCCER TEAM VR" image={images[device].soccer} />
        <Creation
          title="THE&#10; GRID"
          image={images[device].grid}
        />
        <Creation title="FROM UP ABOVE VR" image={images[device].above} />
        <Creation title="POCKET BOREALIS" image={images[device].borealis} />
        <Creation title="THE CURIOSITY" image={images[device].curiosity} />
        <Creation title="MAKE IT FISHEYE" image={images[device].fisheye} />
      </div>
    </div>
  );
}

export default Creations;
