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
      <form>
        <label htmlFor={`pledge${pledge.id}`}>Enter your pledge</label>
        <div className="input-wrapper">
          <input type="number" name="pledge" id={`pledge${pledge.id}`} />
        </div>
        <button className="primary">Continue</button>
        <p className="error-message">Please enter ${pledge.minimum} or more</p>
      </form>
    </div>
  );
}

export default Pledge;
