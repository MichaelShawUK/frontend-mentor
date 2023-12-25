import { RewardType } from "./Reward";
import Radio from "./Radio";

function Pledge({ pledge }: { pledge: RewardType }) {
  return (
    <div className={`pledge ${pledge.remaining === 0 ? "disabled" : ""}`}>
      <Radio />
      <h3>{pledge.title}</h3>
      {pledge.minimum && (
        <p className="minimum">Pledge ${pledge.minimum} or more</p>
      )}
      <p className="description">{pledge.description}</p>
      {pledge.remaining !== null && (
        <p className="remaining">
          <span>{pledge.remaining}</span> left
        </p>
      )}
    </div>
  );
}

export default Pledge;
