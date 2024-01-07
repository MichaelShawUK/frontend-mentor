import "./styles/css/index.css";

import useDeviceMode from "./hooks/useDeviceMode";
import DeviceModeContext from "./context/DeviceModeContext";

import Nav from "./components/Nav";

function Insure() {
  const device = useDeviceMode(768);
  console.log(device);

  return (
    <DeviceModeContext.Provider value={device}>
      <div className={`insure ${device}`}>
        <Nav />
        <h1>heading</h1>
        <p>INSURE</p>
      </div>
    </DeviceModeContext.Provider>
  );
}

export default Insure;
