import { useEffect, useState } from "react";

function getDevice(width: number) {
  return width < 468 ? "MOBILE" : "DESKTOP";
}

function useViewMode() {
  const [viewMode, setViewMode] = useState(getDevice(innerWidth));

  useEffect(() => {
    window.addEventListener("resize", () => {
      setViewMode(getDevice(innerWidth));
    });
  }, []);

  return viewMode;
}

export default useViewMode;
