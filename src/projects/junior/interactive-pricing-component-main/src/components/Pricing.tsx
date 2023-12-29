import Slider from "./Slider";
import BillingToggle from "./BillingToggle";

import { useState } from "react";

const prices = [
  {
    pageviews: "10K",
    monthlyPrice: 8,
  },
  {
    pageviews: "50K",
    monthlyPrice: 12,
  },
  {
    pageviews: "100K",
    monthlyPrice: 16,
  },
  {
    pageviews: "500K",
    monthlyPrice: 24,
  },
  {
    pageviews: "1M",
    monthlyPrice: 36,
  },
];

function Pricing() {
  const [isDiscounted, setIsDiscounted] = useState(false);
  const toggleDiscount = () => setIsDiscounted((previous) => !previous);

  const [sliderPosition, setSliderPosition] = useState(50);
  const onSlide = setSliderPosition;

  const index = Math.min(
    Math.floor(prices.length * (sliderPosition / 100)),
    prices.length - 1
  );
  const monthlyPrice = prices[index].monthlyPrice;
  const pageviews = prices[index].pageviews;
  const annualPrice = monthlyPrice * 12 * 0.75;

  return (
    <div className="pricing">
      <p className="traffic">{pageviews} PAGEVIEWS</p>
      <Slider position={sliderPosition} setPosition={onSlide} />

      <p className="price">
        <span>${isDiscounted ? annualPrice : monthlyPrice}.00</span> /
        {isDiscounted ? " year" : " month"}
      </p>
      <BillingToggle onToggle={toggleDiscount} isDiscounted={isDiscounted} />
      <hr />
      {/* <div className="features"> */}
      <ul className="features">
        <li>Unlimited websites</li>
        <li>100% data ownership</li>
        <li>Email reports</li>
      </ul>
      <button>Start my trial</button>
      {/* </div> */}
    </div>
  );
}

export default Pricing;
