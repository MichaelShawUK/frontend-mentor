import "./styles/css/index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import useViewMode from "./hooks/useViewMode";

function Blogr() {
  const device = useViewMode();

  return (
    <div className={`blogr ${device}`}>
      <Header />
      <Footer />
    </div>
  );
}

export default Blogr;
