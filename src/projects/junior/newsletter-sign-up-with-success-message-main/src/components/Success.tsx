import iconSuccess from "../assets/images/icon-success.svg";

function Success({ resetSubscription }: { resetSubscription: () => void }) {
  return (
    <div className="success-container">
      <article className="success">
        <img src={iconSuccess} />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to <b>ash@loremcompany.com</b>.
          Please open it and click the button inside to confirm your
          subscription.
        </p>
        <button onClick={resetSubscription}>Dismiss message</button>
      </article>
    </div>
  );
}

export default Success;
