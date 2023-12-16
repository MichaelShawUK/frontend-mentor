import hamburger from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close.svg";
import Nav from "./Nav";
import AccountActions from "./AccountActions";

import { useState } from "react";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const HamburgerIcon = <img src={hamburger} className="icon" onClick={open} />;
  const CloseIcon = <img src={closeIcon} className="icon" onClick={close} />;
  const Icon = isOpen ? CloseIcon : HamburgerIcon;

  return (
    <div className="mobile-menu">
      {Icon}
      {isOpen && (
        <div className="modal">
          <Nav />
          <AccountActions />
        </div>
      )}
    </div>
  );
}

export default MobileMenu;
