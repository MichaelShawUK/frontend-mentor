import { NotificationType } from "../models/Notification";
import {
  PostReaction,
  JoinGroup,
  PrivateMessage,
  PictureComment,
  LeaveGroup,
} from "../models/Notification";

interface Props {
  notification: NotificationType;
}

function Notification({ notification }: Props) {
  let subject,
    privateMessage,
    picture = null;

  if (notification instanceof PostReaction) subject = notification.postTitle;
  if (notification instanceof JoinGroup) subject = notification.group;
  if (notification instanceof LeaveGroup) subject = notification.group;
  if (notification instanceof PictureComment) picture = notification.imagePath;
  if (notification instanceof PrivateMessage)
    privateMessage = notification.messageContent;

  return (
    <div className="notification">
      <img src={notification.user.avatar} />
      <p>{notification.user.full_name()}</p>
      <p>{notification.message}</p>
      {subject && <p>{subject}</p>}
      {privateMessage && <p>{privateMessage}</p>}
      {picture && <img src={picture} />}
      <p>{notification.created_at.toDateString()}</p>
      <hr></hr>
    </div>
  );
}

export default Notification;
