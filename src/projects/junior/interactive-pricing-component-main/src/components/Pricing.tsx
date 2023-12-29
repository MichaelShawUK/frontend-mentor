import Slider from "./Slider";
import BillingToggle from "./BillingToggle";

import { useState } from "react";

function Pricing() {
  const [isDiscounted, setIsDiscounted] = useState(false);
  const toggleDiscount = () => setIsDiscounted((previous) => !previous);

  const [sliderPosition, setSliderPosition] = useState(50);
  const onSlide = setSliderPosition;

  console.log(sliderPosition);

  return (
    <div className="pricing">
      <p className="traffic">100K PAGEVIEWS</p>
      <p className="price">
        <span>$16.00</span>/month
      </p>
      <Slider position={sliderPosition} setPosition={onSlide} />
      <BillingToggle onToggle={toggleDiscount} isDiscounted={isDiscounted} />
      <hr />
      <div className="features">
        <ul>
          <li>Unlimited websites</li>
          <li>100% data ownership</li>
          <li>Email reports</li>
        </ul>
        <button>Start my trial</button>
      </div>
    </div>
  );
}

export default Pricing;
