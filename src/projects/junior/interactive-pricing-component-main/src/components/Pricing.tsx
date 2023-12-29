import Slider from "./Slider";
import BillingToggle from "./BillingToggle";

function Pricing() {
  return (
    <div className="pricing">
      <p className="traffic">100K PAGEVIEWS</p>
      <p className="price">
        <span>$16.00</span>/month
      </p>
      <Slider />
      <BillingToggle />
    </div>
  );
}

export default Pricing;
