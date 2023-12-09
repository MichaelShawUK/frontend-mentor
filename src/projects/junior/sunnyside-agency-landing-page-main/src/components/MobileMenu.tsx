import { useState, useRef } from "react";

import Nav from "./Nav";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  if (isOpen && dialogRef.current) dialogRef.current.showModal();

  if (!isOpen && dialogRef.current) dialogRef.current.close();

  return (
    <div className="mobile-menu" onClick={toggleMenu}>
      <svg width="24" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M24 16v2H0v-2h24zm0-8v2H0V8h24zm0-8v2H0V0h24z"
          fill="#FFF"
          fillRule="evenodd"
        />
      </svg>
      <dialog ref={dialogRef}>
        <Nav />
      </dialog>
    </div>
  );
}

export default MobileMenu;
