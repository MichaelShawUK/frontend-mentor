import Nav from "./Nav";

import { useEffect, useRef } from "react";

interface Props {
  isOpen: boolean;
}

function MobileMenu({ isOpen }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const menu = dialogRef.current;

    if (menu && isOpen) menu.show();
    if (menu && !isOpen) menu.close();
  }, [isOpen]);

  return (
    <dialog className="mobile-menu" ref={dialogRef}>
      <Nav />
    </dialog>
  );
}

export default MobileMenu;
