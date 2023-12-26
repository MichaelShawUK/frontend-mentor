import { RewardType } from "./Reward";
import Radio from "./Radio";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { selectReward, onChange, onSubmit } from "../store/slices/modal";
import { useAppSelector } from "../hooks/useRedux";

function Pledge({
  pledge,
  selected,
}: {
  pledge: RewardType;
  selected: boolean;
}) {
  const dispatch: AppDispatch = useDispatch();
  const hasError = useAppSelector((state) => state.modal.hasError);
  const pledgeAmount = useAppSelector((state) => state.modal.pledgeAmount);

  function submitHandler(event: React.FormEvent) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const input = form[0] as HTMLInputElement;
    const value = input.value;

    dispatch(onSubmit({ value, minimum: pledge.minimum }));
  }

  function inputHandler(event: React.ChangeEvent) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    dispatch(onChange({ value, minimum: pledge.minimum }));
  }

  return (
    <div
      className={`pledge ${selected ? "selected" : ""} ${
        pledge.remaining === 0 ? "disabled" : ""
      } ${pledge.id === 0 ? "empty" : ""}`}
      onClick={() => dispatch(selectReward(pledge.id))}
    >
      <Radio />
      <h3>{pledge.title}</h3>
      {pledge.minimum !== 0 && (
        <p className="minimum">Pledge ${pledge.minimum} or more</p>
      )}
      <p className="description">{pledge.description}</p>
      {pledge.remaining !== null && (
        <p className="remaining">
          <span>{pledge.remaining}</span> left
        </p>
      )}
      <form onSubmit={submitHandler} className={`${hasError ? "error" : ""}`}>
        <label htmlFor={`pledge${pledge.id}`}>Enter your pledge</label>
        <div className="input-wrapper">
          <input
            type="number"
            name="pledge"
            id={`pledge${pledge.id}`}
            onChange={inputHandler}
            value={pledgeAmount}
          />
        </div>
        <button className="primary">Continue</button>
        <p className="error-message">Please enter ${pledge.minimum} or more</p>
      </form>
    </div>
  );
}

export default Pledge;
