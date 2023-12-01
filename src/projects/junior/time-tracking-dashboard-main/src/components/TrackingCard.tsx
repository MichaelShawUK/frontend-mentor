import workSvg from "../assets/images/icon-work.svg";
import Ellipsis from "./Ellipsis";

function TrackingCard() {
  return (
    <div className="tracking">
      <div className="background">
        <img src={workSvg} />
      </div>
      <div className="card">
        <h6>Work</h6>
        <Ellipsis />
        <p className="time">32hrs</p>
        <p className="previous">Last Week - 36hrs</p>
      </div>
    </div>
  );
}

export default TrackingCard;
