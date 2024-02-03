import { createContext } from "react";

const DeviceContext = createContext<"mobile" | "desktop">("desktop");

export default DeviceContext;
