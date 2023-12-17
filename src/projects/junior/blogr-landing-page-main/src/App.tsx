import "./styles/css/index.css";

import CallToAction from "./components/CallToAction";
import Main from "./components/Main";
import Footer from "./components/Footer";

import ViewModeContext from "./context/ViewMode";
import useViewMode from "./hooks/useViewMode";

function Blogr() {
  const device = useViewMode();

  return (
    <ViewModeContext.Provider value={device}>
      <div className={`blogr ${device}`}>
        <CallToAction />
        <Main />
        <Footer />
      </div>
    </ViewModeContext.Provider>
  );
}

export default Blogr;
