import "../src/styles/css/index.css";
import Header from "./components/Header";
import Services from "./components/Services";
import useViewMode from "./hooks/useViewMode";
import ViewMode from "./context/ViewMode";

function SunnysideAgency() {
  const viewMode = useViewMode();
  console.log(viewMode);

  return (
    <ViewMode.Provider value={viewMode}>
      <div className="sunnyside">
        <Header />
        <Services />
        <p style={{ backgroundColor: "red" }}>Next content</p>
      </div>
    </ViewMode.Provider>
  );
}

export default SunnysideAgency;
