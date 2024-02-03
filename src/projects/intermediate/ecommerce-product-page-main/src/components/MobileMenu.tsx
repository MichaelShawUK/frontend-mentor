import { useEffect, useRef } from "react";

import close from "../assets/images/icon-close.svg";

import Nav from "./Nav";

interface Props {
  show: boolean;
  onClose: () => void;
}

function MobileMenu({ show, onClose }: Props) {
  const menuRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const menu = menuRef.current;

    if (menu && show) menu.showModal();
    if (menu && !show) menu.close();
  }, [show]);

  useEffect(() => {
    const menu = menuRef.current;

    if (menu) menu.addEventListener("close", onClose);

    return () => menu?.removeEventListener("close", onClose);
  }, [onClose]);

  return (
    <dialog className="mobile-menu" ref={menuRef}>
      <img src={close} onClick={onClose} />
      <Nav />
    </dialog>
  );
}

export default MobileMenu;
