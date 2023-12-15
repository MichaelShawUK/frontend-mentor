import "../src/styles/css/index.css";
import Header from "./components/Header";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
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
        <Testimonials />
        <Gallery />
        <Footer />
      </div>
    </ViewMode.Provider>
  );
}

export default SunnysideAgency;
