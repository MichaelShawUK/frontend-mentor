import "./styles/css/index.css";
import notifications from "./data/notifications";

import Notification from "./components/Notification";

function NotificationsPage() {
  return (
    <div className="notifications-page">
      <header>
        <div className="heading">
          <h2>Notifications</h2>
          <span className="badge">3</span>
        </div>
        <button>Mark all as read</button>
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
