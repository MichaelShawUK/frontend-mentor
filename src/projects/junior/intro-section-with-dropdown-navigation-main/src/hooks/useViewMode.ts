import { useEffect, useState } from "react";

function getViewMode(width: number) {
  return width > 768 ? "DESKTOP" : "MOBILE";
}

function useViewMode() {
  const [viewMode, setViewMode] = useState<"DESKTOP" | "MOBILE">(
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
