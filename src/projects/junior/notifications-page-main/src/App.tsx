import "./styles/css/index.css";

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
    </div>
  );
}

export default NotificationsPage;
