import star from "../assets/images/icon-star.svg";
import Rating from "./Rating";

interface Props {
  onSubmission: () => void;
  useRatingState: [
    number | null,
    React.Dispatch<React.SetStateAction<number | null>>
  ];
}

function UserPrompt({ onSubmission, useRatingState }: Props) {
  return (
    <>
      <div className="circle">
        <img src={star}></img>
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Rating useRatingState={useRatingState} />
      <button onClick={onSubmission}>SUBMIT</button>
    </>
  );
}

export default UserPrompt;
