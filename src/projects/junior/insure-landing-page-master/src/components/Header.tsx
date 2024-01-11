import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";

import Nav from "./Nav";

interface Props {
  mode: "desktop" | "mobile" | "modal";
  openMobileNav?: () => void;
  closeMobileNav?: () => void;
}

function Header({ mode, openMobileNav, closeMobileNav }: Props) {
  let content;

  if (mode === "desktop") content = <Nav />;
  if (mode === "mobile")
    content = (
      <button onClick={openMobileNav}>
        <img src={hamburger} />
      </button>
    );
  if (mode === "modal")
    content = (
      <button onClick={closeMobileNav}>
        <img src={close} />
      </button>
    );

  return (
    <header>
      <div className="wrapper">
        <img src={logo} className="logo" />
        {content}
      </div>
    </header>
  );
}

export default Header;
