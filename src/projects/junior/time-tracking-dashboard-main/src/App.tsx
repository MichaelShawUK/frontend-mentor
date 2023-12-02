import "../src/styles/css/index.css";
import ProfileCard from "./components/ProfileCard";
import TrackingCard from "./components/TrackingCard";

function TimeTrackingDashboard() {
  return (
    <div className="time-tracking-dashboard">
      <ProfileCard />
      <TrackingCard />
      <TrackingCard />
      {/* <TrackingCard /> */}
    </div>
  );
}

export default TimeTrackingDashboard;
