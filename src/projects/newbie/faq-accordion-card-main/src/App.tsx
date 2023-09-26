import "./styles/css/index.css";
import DesktopIllustration from "./components/DesktopIllustration";
import MobileIllustration from "./components/MobileIllustration";
import FaqSection from "./components/FaqSection";

import useViewMode from "./hooks/useViewMode";

function App() {
  const viewMode = useViewMode();
  const illustration =
    viewMode === "MOBILE" ? <MobileIllustration /> : <DesktopIllustration />;

  const className = `app ${viewMode.toLowerCase()}`;

  return (
    <div className={className}>
      {illustration}
      <FaqSection viewMode={viewMode.toLowerCase()} />
    </div>
  );
}

export default App;
