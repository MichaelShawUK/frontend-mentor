import "./styles/css/index.css";
import dice from "../src/assets/images/icon-dice.svg";
import mobileDivider from "../src/assets/images/pattern-divider-mobile.svg";
import desktopDivider from "../src/assets/images/pattern-divider-desktop.svg";
import useViewMode from "./hooks/useViewMode";
import { useEffect, useState } from "react";

interface IAdvice {
  id: number;
  advice: string;
}

function AdviceGenerator() {
  const viewMode = useViewMode();
  const divider = viewMode === "MOBILE" ? mobileDivider : desktopDivider;

  const [response, setResponse] = useState<IAdvice>({
    id: 0,
    advice: "",
  });

  async function getAdvice() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setResponse(data.slip);
  }

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <div className="flex-wrapper">
      <div className="advice-generator">
        <div className="advice">
          <h6>ADVICE #{response.id}</h6>
          <p>"{response.advice}"</p>
          <img src={divider} className="divider" />
        </div>
        <button className="dice-btn" onClick={() => getAdvice()}>
          <img src={dice} />
        </button>
      </div>
    </div>
  );
}

export default AdviceGenerator;
