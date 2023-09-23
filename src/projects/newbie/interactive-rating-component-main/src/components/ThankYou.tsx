import thanks from "../assets/images/illustration-thank-you.svg";

function ThankYou({ rating }: { rating: number | null }) {
  return (
    <div className="thank-you">
      <img src={thanks}></img>
      <div className="user-rating">
        <span className="baseline-correct">You selected {rating} out of 5</span>
      </div>
      <h2>Thank you!</h2>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
}

export default ThankYou;
