import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header>
      <img src={logo} className="logo" />
      <button className="secondary">Try It Free</button>
    </header>
  );
}

export default Header;
