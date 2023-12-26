import About from "./About";
import Reward from "./Reward";
import rewards from "../data/rewards";

import { useAppSelector } from "../hooks/useRedux";

function Rewards() {
  const remainingRewards = useAppSelector((state) => state.funding.rewards);
  return (
    <div className="rewards">
      <About />
      {rewards.map((reward) => {
        if (reward.id === 0) return;
        let remaining: number | null = null;

        const match = remainingRewards.find(
          (element) => element.id === reward.id
        );

        if (match) remaining = match.remaining;

        return <Reward key={reward.id} reward={reward} remaining={remaining} />;
      })}
    </div>
  );
}

export default Rewards;
