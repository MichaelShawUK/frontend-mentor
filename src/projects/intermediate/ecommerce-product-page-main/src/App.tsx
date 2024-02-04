import { useState } from "react";

import "./styles/css/index.css";
import useDeviceMode from "./hooks/useDeviceMode";
import DeviceContext from "./context/DeviceContext";

import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Slideshow from "./components/Slideshow";

import mobileDesign from "../design/mobile-design.jpg";
import desktopDesign from "../design/desktop-design.jpg";

function EcommerceProductPage() {
  const device = useDeviceMode(768);

  const [showMenu, setShowMenu] = useState(false);
  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);

  return (
    <DeviceContext.Provider value={device}>
      <div className={`ecommerce-product-page ${device}`}>
        {device === "mobile" && (
          <MobileMenu show={showMenu} onClose={closeMenu} />
        )}
        <Header onOpen={openMenu} />
        <Slideshow />
      </div>
      <img
        src={device === "mobile" ? mobileDesign : desktopDesign}
        style={{ display: "block" }}
      />
    </DeviceContext.Provider>
  );
}

export default EcommerceProductPage;
