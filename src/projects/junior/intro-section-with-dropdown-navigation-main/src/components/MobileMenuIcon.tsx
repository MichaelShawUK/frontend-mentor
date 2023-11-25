import menuIcon from "../assets/images/icon-menu.svg";

function MobileMenuIcon({ onClick }: { onClick: () => void }) {
  return <img src={menuIcon} className="mobile-menu-btn" onClick={onClick} />;
}

export default MobileMenuIcon;
