import images from "../data/images";
import { useContext } from "react";
import ViewMode from "../context/ViewMode";

function Gallery() {
  const device = useContext(ViewMode).toLowerCase() as "desktop" | "mobile";

  return (
    <div className={`gallery ${device}`}>
      <img src={images[device].milkbottles} />
      <img src={images[device].orange} />
      <img src={images[device].cone} />
      <img src={images[device].sugarcubes} />
    </div>
  );
}

export default Gallery;
