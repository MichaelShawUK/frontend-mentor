import "../src/styles/css/index.css";
import Header from "./components/Header";
import useViewMode from "./hooks/useViewMode";
import ViewMode from "./context/ViewMode";

function SunnysideAgency() {
  const viewMode = useViewMode();
  console.log(viewMode);

  return (
    <ViewMode.Provider value={viewMode}>
      <div className="sunnyside">
        <Header />
        <p style={{ backgroundColor: "red" }}>Next content</p>
      </div>
    </ViewMode.Provider>
  );
}

export default SunnysideAgency;
