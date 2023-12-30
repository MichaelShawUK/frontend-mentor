import logo from "../assets/images/logo.svg";
import closeIcon from "../assets/images/icon-close.svg";
import Nav from "./Nav";

import { useEffect, useRef } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const menu = dialogRef.current;

    if (menu && isOpen) menu.showModal();
    if (menu && !isOpen) menu.close();
  }, [isOpen]);

  useEffect(() => {
    const menu = dialogRef.current;

    if (menu) {
      menu.addEventListener("close", onClose);

      return () => {
        menu.removeEventListener("close", onClose);
      };
    }
  }, [onClose]);

  return (
    <dialog className="mobile-menu" ref={dialogRef}>
      <div className="header">
        <img src={logo} className="logo" />
        <img src={closeIcon} onClick={onClose} />
      </div>
      <Nav />
    </dialog>
  );
}

export default MobileMenu;
