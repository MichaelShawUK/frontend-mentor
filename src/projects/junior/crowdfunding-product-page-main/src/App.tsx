import "./styles/css/index.css";
import useDeviceMode from "./hooks/useDeviceMode";
import DeviceContext from "./context/DeviceContext";

import Header from "./components/Header";

function Crowdfund() {
  const device = useDeviceMode(768);

  return (
    <DeviceContext.Provider value={device}>
      <div className={`crowdfund ${device}`}>
        <Header />
        <h1>CROWDFUNDING</h1>
        <p style={{ height: "90vh" }}>{device}</p>
      </div>
    </DeviceContext.Provider>
  );
}

export default Crowdfund;
