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

  const resizeListener = useCallback(() => {
    setDeviceMode(getDeviceMode(innerWidth));
  }, [getDeviceMode]);

  useEffect(() => {
    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [resizeListener]);

  return deviceMode;
}

export default useDeviceMode;
