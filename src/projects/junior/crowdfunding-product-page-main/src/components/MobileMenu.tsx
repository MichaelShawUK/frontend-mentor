import Nav from "./Nav";
import { useRef } from "react";

function MobileMenu({ isOpen }: { isOpen: boolean }) {
  const menuRef = useRef<HTMLDialogElement>(null);

  if (menuRef.current && !isOpen) {
    menuRef.current.close();
  }

  if (menuRef.current && isOpen) {
    menuRef.current.show();
  }

  return (
    <dialog className="mobile-menu" ref={menuRef} open={isOpen}>
      <Nav />
    </dialog>
  );
}

export default MobileMenu;
