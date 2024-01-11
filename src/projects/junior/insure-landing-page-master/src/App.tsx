import "./styles/css/index.css";

import useDeviceMode from "./hooks/useDeviceMode";
import DeviceModeContext from "./context/DeviceModeContext";

import Header from "./components/Header";
import MobileNav from "./components/MobileNav";

function Insure() {
  const device = useDeviceMode(768);
  console.log(device);

  return (
    <DeviceModeContext.Provider value={device}>
      <div className={`insure ${device}`}>
        <MobileNav />
        <Header mode={device} />
        <h1>heading</h1>
        <p>INSURE</p>
      </div>
    </DeviceModeContext.Provider>
  );
}

export default Insure;
