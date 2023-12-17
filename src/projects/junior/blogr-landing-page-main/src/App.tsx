import "./styles/css/index.css";

import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

import ViewModeContext from "./context/ViewMode";
import useViewMode from "./hooks/useViewMode";

function Blogr() {
  const device = useViewMode();

  return (
    <ViewModeContext.Provider value={device}>
      <div className={`blogr ${device}`}>
        <CallToAction />
        <Footer />
      </div>
    </ViewModeContext.Provider>
  );
}

export default Blogr;
