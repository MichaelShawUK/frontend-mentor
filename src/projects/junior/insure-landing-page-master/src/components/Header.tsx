import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import close from "../assets/images/icon-close.svg";

import Nav from "./Nav";

function Header({ mode }: { mode: "desktop" | "mobile" | "modal" }) {
  let content;

  if (mode === "desktop") content = <Nav />;
  if (mode === "mobile")
    content = (
      <button>
        <img src={hamburger} />
      </button>
    );
  if (mode === "modal")
    content = (
      <button>
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
