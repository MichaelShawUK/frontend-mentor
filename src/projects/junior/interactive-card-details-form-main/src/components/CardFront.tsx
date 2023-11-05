import logo from "../assets/images/card-logo.svg";

function CardFront() {
  return (
    <div className="card-front">
      <div className="wrapper">
        <img src={logo} className="logo" />
        <div className="card-details">
          <p className="card-number">0000 0000 0000 0000</p>
          <p className="card-name">JANE APPLESEED</p>
          <p className="card-expiry">00/00</p>
        </div>
      </div>
    </div>
  );
}

export default CardFront;
