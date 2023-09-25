import { IVehicleData } from "../data/types";

function PreviewCard({ data }: { data: IVehicleData }) {
  return (
    <div className={`${data.className} preview-card`}>
      <img src={data.icon} className="icon"></img>
      <h2 className="title">{data.title}</h2>
      <p className="summary">{data.summary}</p>
      <button className="learn-more-btn">Learn More</button>
    </div>
  );
}

export default PreviewCard;
