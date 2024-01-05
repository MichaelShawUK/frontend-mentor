import facebook from "../assets/images/icon-facebook.svg";
import twitter from "../assets/images/icon-twitter.svg";
import instagram from "../assets/images/icon-instagram.svg";
import youtube from "../assets/images/icon-youtube.svg";

export interface AccountType {
  platform: string;
  icon: string;
  username: string;
  followers: number;
  dailyChange: number;
}

const accounts = [
  {
    platform: "facebook",
    icon: facebook,
    username: "@nathanf",
    followers: 1987,
    dailyChange: 12,
  },
  {
    platform: "twitter",
    icon: twitter,
    username: "@nathanf",
    followers: 1044,
    dailyChange: 99,
  },
  {
    platform: "instagram",
    icon: instagram,
    username: "realnathanf",
    followers: 11000,
    dailyChange: 1099,
  },
  {
    platform: "youtube",
    icon: youtube,
    username: "Nathan F.",
    followers: 8239,
    dailyChange: -144,
  },
];

export default accounts;
