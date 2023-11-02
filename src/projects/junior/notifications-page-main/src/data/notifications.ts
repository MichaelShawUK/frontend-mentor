import users from "./users";
import { NotificationType } from "../models/Notification";

const notifications: NotificationType[] = [];

notifications.push(
  users.mark.reactToPost("My first tournament today!"),
  users.angela.follow(),
  users.jacob.joinGroup("Chess Club"),
  users.rizky.privateMessage(
    "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game."
  ),
  users.kimberly.comment(
    "src/projects/junior/notifications-page-main/src/assets/images/image-chess.webp"
  ),
  users.nathan.reactToPost("5 end-game strategies to increase your win rate"),
  users.anna.leaveGroup("Chess Club")
);

export default notifications;
