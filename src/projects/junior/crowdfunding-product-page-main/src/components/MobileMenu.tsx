import Nav from "./Nav";
import { useRef, useEffect } from "react";
import logo from "../assets/images/logo.svg";
import closeIcon from "../assets/images/icon-close-menu.svg";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  setMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileMenu({ isOpen, onClose, setMenuIsOpen }: Props) {
  useEffect(() => {
    return () => {
      if (isOpen) setMenuIsOpen(false);
    };
  }, [isOpen, setMenuIsOpen]);

  const menuRef = useRef<HTMLDialogElement>(null);

  if (menuRef.current && !isOpen) {
    menuRef.current.close();
  }

  if (menuRef.current && isOpen) {
    menuRef.current.showModal();
  }

  return (
    <dialog className="mobile-menu" ref={menuRef}>
      <div className="menu-header">
        <img src={logo} />
        <img src={closeIcon} className="icon" onClick={onClose} />
      </div>
      <Nav />
    </dialog>
  );
}

export default MobileMenu;
