import { IReview } from "../data/types";

function Review({ data }: { data: IReview }) {
  return (
    <div className="review">
      <div className="profile">
        <img className="avatar" src={data.avatar}></img>
        <p className="name">{data.name}</p>
        <p className="status">Verified Buyer</p>
      </div>
      <p>"{data.review}"</p>
    </div>
  );
}

export default Review;
