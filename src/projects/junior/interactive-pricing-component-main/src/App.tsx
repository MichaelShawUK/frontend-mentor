import "./styles/css/index.css";

import Outline from "./components/Outline";
import Pricing from "./components/Pricing";

function InteractivePricing() {
  return (
    <div className="interactive-pricing">
      <Outline />
      <Pricing />
    </div>
  );
}

export default InteractivePricing;
