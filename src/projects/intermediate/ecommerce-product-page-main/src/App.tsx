import "./styles/css/index.css";
import useDeviceMode from "./hooks/useDeviceMode";
import DeviceContext from "./context/DeviceContext";

import Header from "./components/Header";

import mobileDesign from "../design/mobile-design.jpg";
import desktopDesign from "../design/desktop-design.jpg";

function EcommerceProductPage() {
  const device = useDeviceMode(768);

  return (
    <DeviceContext.Provider value={device}>
      <div className={`ecommerce-product-page ${device}`}>
        <Header />
      </div>
      <img
        src={device === "mobile" ? mobileDesign : desktopDesign}
        style={{ display: "block" }}
      />
    </DeviceContext.Provider>
  );
}

export default EcommerceProductPage;
