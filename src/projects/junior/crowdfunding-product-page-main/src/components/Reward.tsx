import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { openModal, selectReward } from "../store/slices/modal";
import { RewardType } from "../data/rewards";
// import { useAppSelector } from "../hooks/useRedux";

// export interface RewardType {
//   id: number;
//   title: string;
//   minimum: number;
//   description: string;
//   remaining: number | null;
// }

function Reward({
  reward,
  remaining,
}: {
  reward: RewardType;
  remaining: number | null;
}) {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className={`${remaining === 0 ? "reward disabled" : "reward"}`}>
      <h3>{reward.title}</h3>
      {!!reward.minimum && (
        <p className="minimum">Pledge ${reward.minimum} or more</p>
      )}
      <p className="description">{reward.description}</p>
      {!!remaining && (
        <p className="remaining">
          <span>{remaining}</span> left
        </p>
      )}
      <button
        className="primary"
        disabled={remaining === 0}
        onClick={() => {
          dispatch(openModal());
          dispatch(selectReward(reward.id));
        }}
      >
        Select Reward
      </button>
    </div>
  );
}

export default Reward;
