import About from "./About";
import Reward from "./Reward";

export const rewards = [
  {
    id: 1,
    title: "Bamboo Stand",
    minimum: 25,
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
    remaining: 101,
  },
  {
    id: 2,
    title: "Black Edition Stand",
    minimum: 75,
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    remaining: 64,
  },
  {
    id: 3,
    title: "Mahogany Special Edition",
    minimum: 200,
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    remaining: 0,
  },
];

function Rewards({ openModal }: { openModal: () => void }) {
  return (
    <div className="rewards">
      <About />
      {rewards.map((reward) => (
        <Reward key={reward.id} reward={reward} openModal={openModal} />
      ))}
    </div>
  );
}

export default Rewards;
