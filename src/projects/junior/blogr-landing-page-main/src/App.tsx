import "./styles/css/index.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import useViewMode from "./hooks/useViewMode";

function Blogr() {
  const device = useViewMode();

  return (
    <div className={`blogr ${device}`}>
      {/* <Nav /> */}
      <h2>HEADER</h2>
      <header>
        <Nav />
      </header>

      <h1>BLOGR</h1>
      <Footer />
    </div>
  );
}

export default Blogr;
