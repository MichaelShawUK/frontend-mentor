import logo from "../assets/images/logo.svg";

function Header() {
  return (
    <header>
      <div className="wrapper">
        <img src={logo} className="logo" />
        <nav>
          <ul>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#team">Team</a>
            </li>
            <li>
              <a href="#sign-in">Sign In</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
