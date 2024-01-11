import Header from "./Header";
import Nav from "./Nav";

import DeviceModeContext from "../context/DeviceModeContext";

import { useContext, useEffect, useRef } from "react";

interface Props {
  isOpen: boolean;
  closeMobileNav: () => void;
}

function MobileNav({ isOpen, closeMobileNav }: Props) {
  const device = useContext(DeviceModeContext);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current) return;

    if (isOpen) dialogRef.current.showModal();
    if (!isOpen) dialogRef.current.close();
  }, [isOpen]);

  useEffect(() => {
    const menu = dialogRef.current;

    if (menu) {
      menu.addEventListener("close", closeMobileNav);

      return () => {
        menu.removeEventListener("close", closeMobileNav);
      };
    }
  }, [closeMobileNav]);

  useEffect(() => {
    if (!dialogRef.current) return;

    if (device !== "mobile") closeMobileNav();
  }, [device, closeMobileNav]);

  return (
    <dialog className="mobile-nav" ref={dialogRef}>
      <Header mode="modal" closeMobileNav={closeMobileNav} />
      <Nav />
    </dialog>
  );
}

export default MobileNav;
