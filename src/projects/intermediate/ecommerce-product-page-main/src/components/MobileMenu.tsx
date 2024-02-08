import useModal from "../hooks/useModal";
import close from "../assets/images/icon-close.svg";

import Nav from "./Nav";

interface Props {
  show: boolean;
  onClose: () => void;
}

function MobileMenu({ show, onClose }: Props) {
  const menuRef = useModal(show, onClose);

  return (
    <dialog className="mobile-menu" ref={menuRef}>
      <button onClick={onClose}>
        <img src={close} />
      </button>
      <Nav />
    </dialog>
  );
}

export default MobileMenu;
