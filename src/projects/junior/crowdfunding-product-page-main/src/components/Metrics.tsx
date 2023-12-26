import ProgressBar from "./ProgressBar";

import { useAppSelector } from "../hooks/useRedux";

function Metrics() {
  const state = useAppSelector((state) => state.funding);

  const progress = state.totalRaised / 1000;

  const total =
    state.totalRaised > 200000
      ? "Completed"
      : `$${state.totalRaised.toLocaleString()}`;

  return (
    <div className="metrics">
      <ul>
        <li>
          <span className="value">{total}</span> of $100,000 backed
        </li>
        <li>
          <span className="value">{state.totalBackers.toLocaleString()}</span>{" "}
          total backers
        </li>
        <li>
          <span className="value">56</span> days left
        </li>
      </ul>
      <ProgressBar progress={progress} />
    </div>
  );
}

export default Metrics;
