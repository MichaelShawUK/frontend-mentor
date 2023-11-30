import { useEffect, useState } from "react";

function getViewMode(width: number) {
  return width <= 500 ? "MOBILE" : "DESKTOP";
}

function useViewMode() {
  const [viewMode, setViewMode] = useState<"MOBILE" | "DESKTOP">(
    getViewMode(innerWidth)
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      setViewMode(getViewMode(innerWidth));
    });
  }, []);

  return viewMode;
}

export default useViewMode;
