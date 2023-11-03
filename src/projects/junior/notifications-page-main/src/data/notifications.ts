import users from "./users";
import { NotificationType } from "../models/Notification";
import chessImage from "../assets/images/image-chess.webp";

const notifications: NotificationType[] = [];

const mark = users.mark.reactToPost("My first tournament today!");
const angela = users.angela.follow();
const jacob = users.jacob.joinGroup("Chess Club");
const rizky = users.rizky.privateMessage(
  "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
);
const kimberly = users.kimberly.comment(chessImage);
const nathan = users.nathan.reactToPost(
  "5 end-game strategies to increase your win rate"
);
const anna = users.anna.leaveGroup("Chess Club");

rizky.unread = false;
kimberly.unread = false;
nathan.unread = false;
anna.unread = false;

const minute = 60 * 1000;
const day = 24 * 60 * minute;
const week = day * 7;

mark.created_at = new Date(Date.now() - minute);
angela.created_at = new Date(Date.now() - 5 * minute);
jacob.created_at = new Date(Date.now() - day);
rizky.created_at = new Date(Date.now() - 5 * day);
kimberly.created_at = new Date(Date.now() - week);
nathan.created_at = new Date(Date.now() - 2 * week);
anna.created_at = new Date(Date.now() - 2 * week);

notifications.push(mark, angela, jacob, rizky, kimberly, nathan, anna);

export default notifications;
