import useModal from "../hooks/useModal";
import Slideshow from "./Slideshow";

import CloseIcon from "../svg/CloseIcon";

interface Props {
  show: boolean;
  onClose: () => void;
}

function Lightbox({ show, onClose }: Props) {
  const dialogRef = useModal(show, onClose);

  return (
    <dialog className="lightbox" ref={dialogRef}>
      <div className="wrapper">
        <button className="close-btn" onClick={onClose}>
          <CloseIcon color="#fff" width="20" height="20" />
        </button>
        <Slideshow />
      </div>
    </dialog>
  );
}

export default Lightbox;
