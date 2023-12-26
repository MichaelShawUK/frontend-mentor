import logo from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import Nav from "./Nav";
import MobileMenu from "./MobileMenu";
import DeviceContext from "../context/DeviceContext";

import { useContext } from "react";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { openMenu } from "../store/slices/mobileMenu";
import { useAppSelector } from "../hooks/useRedux";

function Header() {
  // const [openMobileMenu, setOpenMobileMenu] = useState(false);

  // const openMenu = () => setOpenMobileMenu(true);
  // const closeMenu = useCallback(() => setOpenMobileMenu(false), []);

  const dispatch: AppDispatch = useDispatch();

  const isMobMenuOpen = useAppSelector((state) => state.mobileMenu.isOpen);

  // console.log(isMobMenuOpen);

  const Hamburger = (
    <img
      src={hamburger}
      className="icon"
      onClick={() => dispatch(openMenu())}
    />
  );

  const device = useContext(DeviceContext);
  const Menu = device === "mobile" ? Hamburger : <Nav />;

  return (
    <header className={isMobMenuOpen ? "hidden" : undefined}>
      <img src={logo} />
      {Menu}
      {device === "mobile" && <MobileMenu />}
    </header>
  );
}

export default Header;
