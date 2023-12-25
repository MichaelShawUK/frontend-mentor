import "./styles/css/index.css";
import useDeviceMode from "./hooks/useDeviceMode";
import DeviceContext from "./context/DeviceContext";

import Header from "./components/Header";
import Main from "./components/Main";

import store from "./store/store";
import { Provider } from "react-redux";

function Crowdfund() {
  const device = useDeviceMode(768);

  return (
    <Provider store={store}>
      <DeviceContext.Provider value={device}>
        <div className={`crowdfund ${device}`}>
          <Header />
          <Main />
        </div>
      </DeviceContext.Provider>
    </Provider>
  );
}

export default Crowdfund;
