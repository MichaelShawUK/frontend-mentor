import { useCallback, useEffect, useState } from "react";

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
    const resizeHandler = () => setDeviceMode(getDeviceMode(innerWidth));

    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, [getDeviceMode]);

  return deviceMode;
}

export default useDeviceMode;
