import "./styles/css/index.css";
import useDeviceMode from "./hooks/useDeviceMode";
import DeviceContext from "./context/DeviceContext";

import Header from "./components/Header";
import Main from "./components/Main";

function Crowdfund() {
  const device = useDeviceMode(768);

  return (
    <DeviceContext.Provider value={device}>
      <div className={`crowdfund ${device}`}>
        <Header />
        <Main />
      </div>
    </DeviceContext.Provider>
  );
}

export default Crowdfund;
