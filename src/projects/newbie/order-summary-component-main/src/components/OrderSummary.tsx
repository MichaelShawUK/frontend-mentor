import musicIcon from "../assets/images/icon-music.svg";

function OrderSummary() {
  return (
    <div className="order-summary">
      <h2>Order Summary</h2>
      <p className="description">
        You can now listen to millions of songs, audiobooks, and podcasts on any
        device anywhere you like!
      </p>
      <div className="item">
        <img className="icon" src={musicIcon}></img>
        <div className="details">
          <p className="name">Annual Plan</p>
          <p className="price">$59.99/year</p>
        </div>
        <button className="change-btn">Change</button>
      </div>
      <div className="order-actions">
        <button className="confirm">Proceed to Payment</button>
        <button className="cancel">Cancel Order</button>
      </div>
    </div>
  );
}

export default OrderSummary;
