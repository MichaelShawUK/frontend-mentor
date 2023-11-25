import "./styles/css/index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import useViewMode from "./hooks/useViewMode";
import ViewModeContext from "./context/ViewModeContext";
import MobileMenu from "./components/MobileMenu";

function SnapPage() {
  const viewMode = useViewMode();

  return (
    <ViewModeContext.Provider value={viewMode}>
      <div className="snap-page">
        <Header />
        <Main />
      </div>
      <MobileMenu />
    </ViewModeContext.Provider>
  );
}

export default SnapPage;
