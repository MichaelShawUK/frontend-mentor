import "./styles/css/index.css";
import useDeviceMode from "./hooks/useDeviceMode";

function Clipboard() {
  const device = useDeviceMode(768);

  return (
    <div className={`clipboard ${device}`}>
      <h1>Header</h1>
      <p>CLIPBOARD</p>
      <p>{device}</p>
    </div>
  );
}

export default Clipboard;
