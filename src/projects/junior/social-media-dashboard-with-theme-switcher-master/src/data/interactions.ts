import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import instagram from "../assets/images/icon-instagram.svg";
import youtube from "../assets/images/icon-youtube.svg";

export interface InteractionType {
  id: number;
  platform: string;
  metric: string;
  quantity: number;
  percentChange: number;
}

const interactions = [
  {
    id: 1,
    platform: facebook,
    metric: "Page Views",
    quantity: 87,
    percentChange: 3,
  },
  {
    id: 2,
    platform: facebook,
    metric: "Likes",
    quantity: 52,
    percentChange: -2,
  },
  {
    id: 3,
    platform: twitter,
    metric: "Retweets",
    quantity: 117,
    percentChange: 303,
  },
  {
    id: 4,
    platform: twitter,
    metric: "Likes",
    quantity: 507,
    percentChange: 553,
  },
  {
    id: 5,
    platform: instagram,
    metric: "Profile Views",
    quantity: 52000,
    percentChange: 1375,
  },
  {
    id: 6,
    platform: instagram,
    metric: "Likes",
    quantity: 5462,
    percentChange: 2257,
  },
  {
    id: 7,
    platform: youtube,
    metric: "Total Views",
    quantity: 1407,
    percentChange: -12,
  },
  {
    id: 8,
    platform: youtube,
    metric: "Likes",
    quantity: 107,
    percentChange: -19,
  },
];

export default interactions;
