import useModal from "../hooks/useModal";
import Slideshow from "./Slideshow";

interface Props {
  show: boolean;
  onClose: () => void;
}

function Lightbox({ show, onClose }: Props) {
  const dialogRef = useModal(show, onClose);

  return (
    <dialog className="lightbox" ref={dialogRef}>
      <Slideshow />
    </dialog>
  );
}

export default Lightbox;
