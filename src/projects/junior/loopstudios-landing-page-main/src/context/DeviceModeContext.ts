import { createContext } from "react";

const DeviceModeContext = createContext<"mobile" | "desktop">("desktop");

export default DeviceModeContext;
