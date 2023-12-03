import workSvg from "../assets/images/icon-work.svg";
import playSvg from "../assets/images/icon-play.svg";
import studySvg from "../assets/images/icon-study.svg";
import exerciseSvg from "../assets/images/icon-exercise.svg";
import socailSvg from "../assets/images/icon-social.svg";
import selfCareSvg from "../assets/images/icon-self-care.svg";
import Ellipsis from "./Ellipsis";
import { TimeData } from "../data/getData";
import { useContext } from "react";
import TimeframeContext from "../context/TimeframeContext";

function TrackingCard({
  category,
  data,
}: {
  category: string;
  data: TimeData;
}) {
  let icon = "";
  if (category === "work") icon = workSvg;
  if (category === "play") icon = playSvg;
  if (category === "study") icon = studySvg;
  if (category === "exercise") icon = exerciseSvg;
  if (category === "social") icon = socailSvg;
  if (category === "self-care") icon = selfCareSvg;

  const timeframe = useContext(TimeframeContext);
  let currentTime: number;
  let previousTime: number;

  switch (timeframe) {
    case "DAILY": {
      currentTime = data.timeframes.daily.current;
      previousTime = data.timeframes.daily.previous;
      break;
    }
    case "WEEKLY": {
      currentTime = data.timeframes.weekly.current;
      previousTime = data.timeframes.weekly.previous;
      break;
    }
    case "MONTHLY": {
      currentTime = data.timeframes.monthly.current;
      previousTime = data.timeframes.monthly.previous;
      break;
    }
  }

  return (
    <div className={`tracking ${category}`}>
      <div className="header">
        <img src={icon} className="header-icon" />
      </div>
      <div className="card">
        <h6>{data.title}</h6>
        <Ellipsis />
        <p className="time">{`${currentTime}${
          currentTime === 1 ? "hr" : "hrs"
        }`}</p>
        <p className="previous">{`Last Week - ${previousTime}${
          currentTime === 1 ? "hr" : "hrs"
        }`}</p>
      </div>
    </div>
  );
}

export default TrackingCard;
