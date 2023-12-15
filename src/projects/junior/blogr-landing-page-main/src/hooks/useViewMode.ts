import { useEffect, useState } from "react";

function getViewMode(width: number) {
  return width <= 768 ? "mobile" : "desktop";
}

function useViewMode() {
  const [viewMode, setViewMode] = useState<"mobile" | "desktop">(
    getViewMode(innerWidth)
  );

  useEffect(() => {
    window.addEventListener("resize", (event: UIEvent) => {
      const width = (event.target as Window).innerWidth;
      setViewMode(getViewMode(width));
    });
  }, []);

  return viewMode;
}

export default useViewMode;
