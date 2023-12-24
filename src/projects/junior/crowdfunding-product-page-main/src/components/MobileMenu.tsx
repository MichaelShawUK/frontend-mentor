import Nav from "./Nav";
import { useRef, useEffect, useCallback } from "react";
import logo from "../assets/images/logo.svg";
import closeIcon from "../assets/images/icon-close-menu.svg";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: Props) {
  const menuRef = useRef<HTMLDialogElement>(null);

  const closeMenu = useCallback(() => {
    if (menuRef.current) menuRef.current.close();
    onClose();
  }, [onClose]);

  useEffect(() => {
    const menu = menuRef.current;

    menu?.addEventListener("close", closeMenu);

    return () => {
      menu?.removeEventListener("close", closeMenu);
      closeMenu();
    };
  }, [closeMenu]);

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
