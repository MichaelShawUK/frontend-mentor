import "./styles/css/index.css";

import useDeviceMode from "./hooks/useDeviceMode";
import DeviceModeContext from "./context/DeviceModeContext";

import Header from "./components/Header";
import MobileNav from "./components/MobileNav";

import { useState } from "react";

function Insure() {
  const device = useDeviceMode(768);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const openMobileNav = () => setIsMobileNavOpen(true);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <DeviceModeContext.Provider value={device}>
      <div className={`insure ${device}`}>
        <MobileNav isOpen={isMobileNavOpen} closeMobileNav={closeMobileNav} />
        <Header mode={device} openMobileNav={openMobileNav} />
        <h1>heading</h1>
        <p>INSURE</p>
      </div>
    </DeviceModeContext.Provider>
  );
}

export default Insure;
