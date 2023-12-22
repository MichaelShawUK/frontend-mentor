import { useState, useEffect, useCallback } from "react";

function useDeviceMode(breakpoint: number) {
  const getDeviceMode = useCallback(
    (width: number) => {
      return width <= breakpoint ? "mobile" : "desktop";
    },
    [breakpoint]
  );

  const [deviceMode, setDeviceMode] = useState<"mobile" | "desktop">(
    getDeviceMode(innerWidth)
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDeviceMode(getDeviceMode(window.innerWidth));
    });
  }, [getDeviceMode]);

  return deviceMode;
}

export default useDeviceMode;
