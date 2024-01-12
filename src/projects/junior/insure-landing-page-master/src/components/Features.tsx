import snappyProcess from "../assets/images/icon-snappy-process.svg";
import affordablePrices from "../assets/images/icon-affordable-prices.svg";
import peopleFirst from "../assets/images/icon-people-first.svg";

function Features() {
  return (
    <section className="features">
      <h1>We're different</h1>
      <ul>
        <li>
          <img src={snappyProcess} />
          <h3>Snappy Process</h3>
          <p>
            Our application process can be completed in minutes, not hours.
            Don't get stuck filling in tedious forms.
          </p>
        </li>
        <li>
          <img src={affordablePrices} />
          <h3>Affordable Prices</h3>
          <p>
            We don't want you worrying about high monthly costs. Our prices may
            be low, but we still offer the best coverage possible.
          </p>
        </li>
        <li>
          <img src={peopleFirst} />
          <h3>People First</h3>
          <p>
            Our plans aren't full of conditions and clauses to prevent payouts.
            We make sure you're covered when you need it.
          </p>
        </li>
      </ul>
    </section>
  );
}

export default Features;
