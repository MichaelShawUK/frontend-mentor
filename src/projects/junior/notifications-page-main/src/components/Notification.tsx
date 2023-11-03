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
  let subject = null;
  let picture = null;
  let privateMessage = null;

  if (notification instanceof PostReaction) subject = notification.postTitle;
  if (notification instanceof JoinGroup) subject = notification.group;
  if (notification instanceof LeaveGroup) subject = notification.group;
  if (notification instanceof PictureComment) picture = notification.imagePath;
  if (notification instanceof PrivateMessage)
    privateMessage = notification.messageContent;

  return (
    <div className="notification">
      <img src={notification.user.avatar} className="avatar" />
      <div className="summary">
        <p className="message">
          <span className="name">{notification.user.full_name()}</span>
          {notification.message}
          {subject && <span className="subject">{subject}</span>}
        </p>
        <p className="time">{notification.created_at.toDateString()}</p>
      </div>
      {picture && <img src={picture} className="picture" />}
      {privateMessage && <p className="private-message">{privateMessage}</p>}
    </div>
  );
}

export default Notification;
