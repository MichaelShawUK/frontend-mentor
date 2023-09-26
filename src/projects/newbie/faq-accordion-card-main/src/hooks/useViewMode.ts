import { useEffect, useState } from "react";

function useViewMode() {
  function getViewMode(width: number) {
    if (width > 820) return "DESKTOP";
    else return "MOBILE";
  }

  function resizeHandler(event: Event) {
    const window = event.target as Window;
    setViewMode(getViewMode(window.innerWidth));
  }

  const [viewMode, setViewMode] = useState<"MOBILE" | "DESKTOP">(
    getViewMode(window.innerWidth)
  );

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
  });

  return viewMode;
}

export default useViewMode;
