import { createContext } from "react";

export type TimeframeType = "DAILY" | "WEEKLY" | "MONTHLY";
const TimeframeContext = createContext<TimeframeType>("DAILY");

export default TimeframeContext;
