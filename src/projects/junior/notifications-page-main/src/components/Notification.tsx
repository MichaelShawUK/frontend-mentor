import { NotificationType } from "../models/Notification";

interface Props {
  notification: NotificationType;
}

function Notification({ notification }: Props) {
  return (
    <div className="notification">
      <p>{notification.user.full_name()}</p>
    </div>
  );
}

export default Notification;
