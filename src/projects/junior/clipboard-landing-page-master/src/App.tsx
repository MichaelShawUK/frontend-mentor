import "./styles/css/index.css";
import useDeviceMode from "./hooks/useDeviceMode";

import Header from "./components/Header";
import Main from "./components/Main";

function Clipboard() {
  const device = useDeviceMode(768);

  return (
    <div className={`clipboard ${device}`}>
      <Header />
      <Main />
      {/* <img src="src/projects/junior/clipboard-landing-page-master/design/desktop-design.jpg" /> */}
    </div>
  );
}

export default Clipboard;