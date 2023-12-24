interface RewardType {
  id: number;
  title: string;
  minimum: number;
  description: string;
  remaining: number;
}

function Reward({ reward }: { reward: RewardType }) {
  return (
    <div className={`${reward.remaining === 0 ? "reward disabled" : "reward"}`}>
      <h3>{reward.title}</h3>
      <p className="minimum">Pledge ${reward.minimum} or more</p>
      <p className="description">{reward.description}</p>
      <p className="remaining">
        <span>{reward.remaining}</span> left
      </p>
      <button className="primary" disabled={reward.remaining === 0}>
        Select Reward
      </button>
    </div>
  );
}

export default Reward;
