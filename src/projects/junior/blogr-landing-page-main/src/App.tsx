import "./styles/css/index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import ViewModeContext from "./context/ViewMode";
import useViewMode from "./hooks/useViewMode";

function Blogr() {
  const device = useViewMode();

  return (
    <ViewModeContext.Provider value={device}>
      <div className={`blogr ${device}`}>
        <Header />
        <Footer />
      </div>
    </ViewModeContext.Provider>
  );
}

export default Blogr;
