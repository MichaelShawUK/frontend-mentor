import { useState } from "react";

import "./styles/css/index.css";
import useDeviceMode from "./hooks/useDeviceMode";
import DeviceContext from "./context/DeviceContext";

import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Slideshow from "./components/Slideshow";
import ProductInfo from "./components/ProductInfo";
import AddToCart from "./components/AddToCart";
import Gallery from "./components/Gallery";
import Lightbox from "./components/Lightbox";

import mobileDesign from "../design/mobile-design.jpg";
import desktopDesign from "../design/desktop-design.jpg";

function EcommerceProductPage() {
  const device = useDeviceMode(768);

  const [showMenu, setShowMenu] = useState(false);
  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);

  const [showLightbox, setShowLightbox] = useState(false);
  const openLightbox = () => setShowLightbox(true);
  const closeLightbox = () => setShowLightbox(false);

  const desktopMarkup = (
    <>
      <Lightbox show={showLightbox} onClose={closeLightbox} />
      <Header onOpen={openMenu} />
      <main>
        <Gallery onOpen={openLightbox} />
        <div className="wrapper">
          <ProductInfo />
          <AddToCart />
        </div>
      </main>
    </>
  );

  const mobileMarkup = (
    <>
      <MobileMenu show={showMenu} onClose={closeMenu} />
      <Header onOpen={openMenu} />
      <main>
        <Slideshow />
        <ProductInfo />
        <AddToCart />
      </main>
    </>
  );

  return (
    <DeviceContext.Provider value={device}>
      <div className={`ecommerce-product-page ${device}`}>
        {device === "mobile" && mobileMarkup}
        {device === "desktop" && desktopMarkup}
      </div>
      {/* <img
        src={device === "mobile" ? mobileDesign : desktopDesign}
        style={{ display: "block" }}
      /> */}
    </DeviceContext.Provider>
  );
}

export default EcommerceProductPage;
