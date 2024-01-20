import "./styles/css/index.css";
import useDeviceMode from "./hooks/useDeviceMode";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function Clipboard() {
  const device = useDeviceMode(768);

  return (
    <div className={`clipboard ${device}`}>
      <Header />
      <Main />
      <Footer />
      <img
        src="src/projects/junior/clipboard-landing-page-master/design/mobile-design.jpg"
        style={{ borderTop: "3px solid red" }}
      />
    </div>
  );
}

export default Clipboard;
