import { createContext } from "react";

const ViewMode = createContext<"DESKTOP" | "MOBILE">("MOBILE");

export default ViewMode;
