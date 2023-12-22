import bookmarkIcon from "../assets/images/icon-bookmark.svg";
import { useContext } from "react";
import DeviceContext from "../context/DeviceContext";

function Bookmark() {
  const device = useContext(DeviceContext);
  return (
    <button className="bookmark">
      <img src={bookmarkIcon} />
      {device === "desktop" && <p>Bookmark</p>}
    </button>
  );
}

export default Bookmark;
