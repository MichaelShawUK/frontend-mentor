import "./styles/css/index.css";

import useDeviceMode from "./hooks/useDeviceMode";
import DeviceModeContext from "./context/DeviceModeContext";

import MobileNav from "./components/MobileNav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import { useState } from "react";

function Insure() {
  const device = useDeviceMode(768);

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const openMobileNav = () => setIsMobileNavOpen(true);
  const closeMobileNav = () => setIsMobileNavOpen(false);

  return (
    <DeviceModeContext.Provider value={device}>
      <div className={`insure ${device}`}>
        {device === "mobile" && (
          <MobileNav isOpen={isMobileNavOpen} closeMobileNav={closeMobileNav} />
        )}
        <Header mode={device} openMobileNav={openMobileNav} />
        <Main />
        <Footer />
      </div>
    </DeviceModeContext.Provider>
  );
}

export default Insure;
