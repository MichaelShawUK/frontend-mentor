import "./styles/css/index.css";
import dice from "../src/assets/images/icon-dice.svg";
import mobileDivider from "../src/assets/images/pattern-divider-mobile.svg";
import desktopDivider from "../src/assets/images/pattern-divider-desktop.svg";
import useViewMode from "./hooks/useViewMode";

function AdviceGenerator() {
  const viewMode = useViewMode();
  const divider = viewMode === "MOBILE" ? mobileDivider : desktopDivider;

  return (
    <div className="flex-wrapper">
      <div className="advice-generator">
        <p>ADVIDE GENERATOR</p>
        <button className="dice-btn">
          <img src={dice} />
        </button>
        <img src={divider} />
      </div>
    </div>
  );
}

export default AdviceGenerator;
