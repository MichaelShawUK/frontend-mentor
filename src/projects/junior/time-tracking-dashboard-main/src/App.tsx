import "../src/styles/css/index.css";
import ProfileCard from "./components/ProfileCard";
import TrackingCard from "./components/TrackingCard";
import getData from "./data/getData";
import TimeframeContext, { TimeframeType } from "./context/TimeframeContext";
import { useState } from "react";

function TimeTrackingDashboard() {
  const [timeframe, setTimeframe] = useState<TimeframeType>("DAILY");

  function changeTimeframe(event: React.MouseEvent) {
    const element = event.target as HTMLLIElement;
    const selectedTimeframe = element.innerText.toUpperCase() as TimeframeType;
    setTimeframe(selectedTimeframe);
  }
  return (
    <TimeframeContext.Provider value={timeframe}>
      <div className="time-tracking-dashboard">
        <ProfileCard onTimeframeChange={changeTimeframe} />
        <TrackingCard category="work" data={getData("Work")!} />
        <TrackingCard category="play" data={getData("Play")!} />
        <TrackingCard category="study" data={getData("Study")!} />
        <TrackingCard category="exercise" data={getData("Exercise")!} />
        <TrackingCard category="social" data={getData("Social")!} />
        <TrackingCard category="self-care" data={getData("Self Care")!} />
      </div>
    </TimeframeContext.Provider>
  );
}

export default TimeTrackingDashboard;
