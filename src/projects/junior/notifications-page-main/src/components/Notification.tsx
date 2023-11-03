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
  let postTitle = null;
  let group = null;
  let picture = null;
  let privateMessage = null;

  if (notification instanceof PostReaction) postTitle = notification.postTitle;
  if (notification instanceof JoinGroup) group = notification.group;
  if (notification instanceof LeaveGroup) group = notification.group;
  if (notification instanceof PictureComment) picture = notification.imagePath;
  if (notification instanceof PrivateMessage)
    privateMessage = notification.messageContent;

  const className = `notification${notification.unread ? " unread" : ""}`;

  return (
    <div className={className}>
      <img src={notification.user.avatar} className="avatar" />
      <div className="flex-wrapper">
        <div className="summary">
          <p className="message">
            <span className="name">{notification.user.full_name()} </span>
            {notification.message}
            {postTitle && <span className="post-title"> {postTitle}</span>}
            {group && <span className="group"> {group}</span>}
            {notification.unread && <i className="unread-badge"></i>}
          </p>
          <p className="time">{notification.getRelativeTime()}</p>
        </div>
        {picture && <img src={picture} className="picture" />}
      </div>
      {privateMessage && <p className="private-message">{privateMessage}</p>}
    </div>
  );
}

export default Notification;
