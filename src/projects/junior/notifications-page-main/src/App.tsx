import "./styles/css/index.css";
import notificationsData from "./data/notifications";
import Notification from "./components/Notification";

import { useState } from "react";

function NotificationsPage() {
  const [notifications, setNotifications] = useState(notificationsData);

  const count = notifications.reduce((total, current) => {
    total += current.unread ? 1 : 0;
    return total;
  }, 0);

  function markAsRead() {
    const readAll = notifications.map((notification) => {
      const read = Object.create(notification);
      Object.assign(read, notification);
      read.unread = false;
      return read;
    });

    setNotifications(readAll);
  }

  return (
    <div className="notifications-page">
      <header>
        <div className="heading">
          <h2>Notifications</h2>
          <span className="badge">{count}</span>
        </div>
        <button onClick={markAsRead}>Mark all as read</button>
      </header>
      <main>
        {notifications.map((notification, index) => (
          <Notification notification={notification} key={index} />
        ))}
      </main>
    </div>
  );
}

export default NotificationsPage;
