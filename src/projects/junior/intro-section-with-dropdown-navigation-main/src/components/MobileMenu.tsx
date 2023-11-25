import DropdownNav from "./DropdownNav";
import closeIcon from "../assets/images/icon-close-menu.svg";
import { useRef } from "react";

function MobileMenu({ show, onClose }: { show: boolean; onClose: () => void }) {
  const modalRef = useRef<HTMLDialogElement>(null);

  if (modalRef.current && show) {
    modalRef.current.showModal();
  }
  if (modalRef.current && !show) {
    modalRef.current.close();
  }

  return (
    <dialog className="mobile-menu" ref={modalRef}>
      <img src={closeIcon} className="close-btn" onClick={onClose} />
      <DropdownNav mode="mobile" />
    </dialog>
  );
}

export default MobileMenu;
