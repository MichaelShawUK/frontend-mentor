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

mark.created_at = new Date(Date.now() - 60 * 1000);

notifications.push(mark, angela, jacob, rizky, kimberly, nathan, anna);

export default notifications;
