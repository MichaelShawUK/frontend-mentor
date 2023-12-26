import checkIcon from "../assets/images/icon-check.svg";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { closeSuccess } from "../store/slices/modal";
import { addPledge } from "../store/slices/funding";
import { useAppSelector } from "../hooks/useRedux";

function Success() {
  const dispatch: AppDispatch = useDispatch();

  const pledge = useAppSelector((state) => state.modal);
  const rewardId = pledge.selectedReward || 0;
  const amount = +pledge.pledgeAmount;

  // dispatch(addPledge({ id: rewardId, amount }));

  return (
    <>
      <img src={checkIcon} />
      <h3>Thanks for your support!</h3>
      <p>
        Your pledge brings us one step closer to sharing Mastercraft Bamboo
        Monitor Riser worldwide. You will get an email once our campaign is
        completed.
      </p>
      <button
        className="primary"
        onClick={() => {
          dispatch(addPledge({ id: rewardId, amount }));

          dispatch(closeSuccess());
        }}
      >
        Got it!
      </button>
    </>
  );
}

export default Success;
