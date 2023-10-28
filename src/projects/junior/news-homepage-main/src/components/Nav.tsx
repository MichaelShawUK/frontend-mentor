import menuIcon from "../assets/images/icon-menu.svg";

interface Props {
  viewMode: "MOBILE" | "DESKTOP";
  onOpenMenu: () => void;
}

function Nav({ viewMode, onOpenMenu }: Props) {
  if (viewMode === "MOBILE")
    return (
      <img src={menuIcon} onClick={onOpenMenu} className="mobile-menu-icon" />
    );
  return (
    <nav>
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">New</a>
        </li>
        <li>
          <a href="#">Popular</a>
        </li>
        <li>
          <a href="#">Trending</a>
        </li>
        <li>
          <a href="#">Categories</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
