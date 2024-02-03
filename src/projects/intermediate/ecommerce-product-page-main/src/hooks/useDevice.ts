import { useContext } from "react";

import DeviceContext from "../context/DeviceContext";

const useDevice = () => useContext(DeviceContext);

export default useDevice;
