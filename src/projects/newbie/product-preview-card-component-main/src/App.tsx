import "./styles/css/index.css";
import desktopImage from "../src/assets/images/image-product-desktop.jpg";
import cartIcon from "../src/assets/images/icon-cart.svg";

function App() {
  return (
    <div className="app">
      <img src={desktopImage}></img>
      <div className="information">
        <div className="product-details">
          <div className="category">PERFUME</div>
          <h2 className="name">Gabrielle Essence Eau De Parfum</h2>
          <p className="description">
            A floral, solar and voluptuous interpretation composed by Oliver
            Polge, Perfumer-Creator for the house of CHANEL.
          </p>
          <div className="price">
            <p className="current-price">$149.99</p>
            <p className="previous-price">$169.99</p>
          </div>
        </div>
        <button>
          <i className="cart-icon">
            <img src={cartIcon}></img>
          </i>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default App;
