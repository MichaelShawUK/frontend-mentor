import DropdownNav from "./DropdownNav";
import closeIcon from "../assets/images/icon-close-menu.svg";

function MobileMenu() {
  return (
    <dialog open className="mobile-menu">
      <img src={closeIcon} className="close-btn" />
      <DropdownNav mode="mobile" />
    </dialog>
  );
}

export default MobileMenu;
