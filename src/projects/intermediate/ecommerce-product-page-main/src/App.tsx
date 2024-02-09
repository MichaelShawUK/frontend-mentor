import { useState } from "react";
import { Provider } from "react-redux";

import "./styles/css/index.css";
import useDeviceMode from "./hooks/useDeviceMode";
import DeviceContext from "./context/DeviceContext";
import store from "./app/store";

import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import Slideshow from "./components/Slideshow";
import ProductInfo from "./components/ProductInfo";
import AddToCart from "./components/AddToCart";
import Gallery from "./components/Gallery";
import Lightbox from "./components/Lightbox";
import Cart from "./components/Cart";

function StoreWrapper() {
  return (
    <Provider store={store}>
      <EcommerceProductPage />
    </Provider>
  );
}

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
        <Cart />
      </div>
    </DeviceContext.Provider>
  );
}

export default StoreWrapper;
