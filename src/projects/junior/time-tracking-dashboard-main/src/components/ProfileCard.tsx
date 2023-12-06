import avatar from "../assets/images/image-jeremy.png";
import { useContext } from "react";
import TimeframeContext from "../context/TimeframeContext";

function ProfileCard({
  onTimeframeChange,
}: {
  onTimeframeChange: (event: React.MouseEvent) => void;
}) {
  const timeframe = useContext(TimeframeContext);

  return (
    <div className="profile">
      <div className="avatar">
        <img src={avatar} />
        <p>
          Report for <span className="report-name">Jeremy Robson</span>
        </p>
      </div>
      <ul>
        <li
          onClick={onTimeframeChange}
          className={timeframe === "DAILY" ? "active" : undefined}
        >
          Daily
        </li>
        <li
          onClick={onTimeframeChange}
          className={timeframe === "WEEKLY" ? "active" : undefined}
        >
          Weekly
        </li>
        <li
          onClick={onTimeframeChange}
          className={timeframe === "MONTHLY" ? "active" : undefined}
        >
          Monthly
        </li>
      </ul>
    </div>
  );
}

export default ProfileCard;
