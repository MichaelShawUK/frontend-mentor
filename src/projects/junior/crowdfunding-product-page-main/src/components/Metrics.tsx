import ProgressBar from "./ProgressBar";

function Metrics() {
  return (
    <div className="metrics">
      <ul>
        <li>
          <span className="value">$89,914</span> of $100,000 backed
        </li>
        <li>
          <span className="value">5,007</span> total backers
        </li>
        <li>
          <span className="value">56</span> days left
        </li>
      </ul>
      <ProgressBar progress={70} />
    </div>
  );
}

export default Metrics;
