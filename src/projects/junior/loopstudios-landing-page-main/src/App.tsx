import "./styles/css/index.css";
import DeviceModeContext from "./context/DeviceModeContext";
import useDeviceMode from "./hooks/useDeviceMode";

function Loopstudios() {
  const device = useDeviceMode(768);

  return (
    <DeviceModeContext.Provider value={device}>
      <div className={`loopstudios ${device}`}>
        <p>loopstudios</p>
      </div>
    </DeviceModeContext.Provider>
  );
}

export default Loopstudios;
