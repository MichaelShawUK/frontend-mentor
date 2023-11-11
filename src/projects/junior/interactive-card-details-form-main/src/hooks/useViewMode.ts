import { useEffect, useState } from "react";

function getViewMode(width: number) {
  return width < 1020 ? "MOBILE" : "DESKTOP";
}

function useViewMode() {
  const [viewMode, setViewMode] = useState(getViewMode(window.innerWidth));

  useEffect(() => {
    window.addEventListener("resize", () => {
      setViewMode(getViewMode(window.innerWidth));
    });
  }, []);

  return viewMode;
}

export default useViewMode;
