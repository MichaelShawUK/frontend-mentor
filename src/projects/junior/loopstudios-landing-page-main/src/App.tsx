import "./styles/css/index.css";
import DeviceModeContext from "./context/DeviceModeContext";
import useDeviceMode from "./hooks/useDeviceMode";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";

function Loopstudios() {
  const device = useDeviceMode(768);

  return (
    <DeviceModeContext.Provider value={device}>
      <div className={`loopstudios ${device}`}>
        <Header />
        <Hero />
        <Main />
        <Footer />
      </div>
    </DeviceModeContext.Provider>
  );
}

export default Loopstudios;
