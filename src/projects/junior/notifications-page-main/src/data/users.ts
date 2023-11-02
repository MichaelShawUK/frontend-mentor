import markAvatar from "../assets/images/avatar-mark-webber.webp";
import angelaAvatar from "../assets/images/avatar-angela-gray.webp";
import jacobAvatar from "../assets/images/avatar-jacob-thompson.webp";
import rizkyAvatar from "../assets/images/avatar-rizky-hasanuddin.webp";
import kimberlyAvatar from "../assets/images/avatar-kimberly-smith.webp";
import nathanAvatar from "../assets/images/avatar-nathan-peterson.webp";
import annaAvatar from "../assets/images/avatar-anna-kim.webp";

import User from "../models/User";

const mark = new User("Mark", "Webber", markAvatar);
const angela = new User("Angela", "Gray", angelaAvatar);
const jacob = new User("Jacob", "Thompson", jacobAvatar);
const rizky = new User("Rizky", "Hasanuddin", rizkyAvatar);
const kimberly = new User("Kimberly", "Smith", kimberlyAvatar);
const nathan = new User("Nathan", "Peterson", nathanAvatar);
const anna = new User("Anna", "Kim", annaAvatar);

const users = {
  mark,
  angela,
  jacob,
  rizky,
  kimberly,
  nathan,
  anna,
};

export default users;
