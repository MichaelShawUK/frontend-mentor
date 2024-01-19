import { useCallback, useEffect, useState } from "react";

function useDeviceMode(breakpoint: number) {
  const getDeviceMode = useCallback(
    (width: number) => (width <= breakpoint ? "mobile" : "desktop"),
    [breakpoint]
  );

  const [deviceMode, setDeviceMode] = useState<"mobile" | "desktop">(
    getDeviceMode(innerWidth)
  );

  useEffect(() => {
    function resizeListener() {
      setDeviceMode(getDeviceMode(innerWidth));
    }

    window.addEventListener("resize", resizeListener);

    return () => {
      window.removeEventListener("resize", resizeListener);
    };
  }, [getDeviceMode]);

  return deviceMode;
}

export default useDeviceMode;
