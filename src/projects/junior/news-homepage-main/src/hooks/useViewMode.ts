import { useEffect, useState } from "react";

type ViewType = "MOBILE" | "DESKTOP";

function getDevice(width: number) {
  return width < 468 ? "MOBILE" : "DESKTOP";
}

function useViewMode() {
  const [viewMode, setViewMode] = useState<ViewType>(getDevice(innerWidth));

  useEffect(() => {
    window.addEventListener("resize", () => {
      setViewMode(getDevice(innerWidth));
    });
  }, []);

  return viewMode;
}

export default useViewMode;
