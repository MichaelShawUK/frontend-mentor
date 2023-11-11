import successIcon from "../assets/images/icon-complete.svg";

function Success() {
  return (
    <div className="success">
      <img src={successIcon} />
      <h1>THANK YOU!</h1>
      <p>We've added your card details</p>
      <button>Continue</button>
    </div>
  );
}

export default Success;
