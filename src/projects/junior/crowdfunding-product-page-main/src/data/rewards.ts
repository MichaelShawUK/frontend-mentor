export interface RewardType {
  id: number;
  title: string;
  minimum: number;
  description: string;
}

const rewards: RewardType[] = [
  {
    id: 0,
    title: "Pledge with no reward",
    minimum: 0,
    description:
      "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
  },
  {
    id: 1,
    title: "Bamboo Stand",
    minimum: 25,
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
  },
  {
    id: 2,
    title: "Black Edition Stand",
    minimum: 75,
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
  },
  {
    id: 3,
    title: "Mahogany Special Edition",
    minimum: 200,
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
  },
];

export default rewards;
