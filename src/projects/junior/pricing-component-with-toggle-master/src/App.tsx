import "./styles/css/index.css";
import packages from "./data/packages";

import Toggle from "./components/Toggle";
import Package from "./components/Package";

import { useState } from "react";

function PricingComponentToggle() {
  const [isMonthlyPricing, setIsMonthlyPricing] = useState(false);
  const togglePricing = () => setIsMonthlyPricing((previous) => !previous);

  return (
    <div className="pricing-component-toggle">
      <h1>Our Pricing</h1>
      <Toggle onChange={togglePricing} />
      <section className="packages">
        {packages.map(({ name, price, storage, users, sendData }, index) => (
          <Package
            name={name}
            price={isMonthlyPricing ? price.monthly : price.annually}
            storage={storage}
            users={users}
            sendData={sendData}
            accent={index === 1}
          />
        ))}
      </section>
    </div>
  );
}

export default PricingComponentToggle;
