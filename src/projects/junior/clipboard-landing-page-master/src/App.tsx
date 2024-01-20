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
    </div>
  );
}

export default Clipboard;
