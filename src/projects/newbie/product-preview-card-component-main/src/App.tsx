import "./styles/css/index.css";
import desktopImage from "../src/assets/images/image-product-desktop.jpg";
import mobileImage from "../src/assets/images/image-product-mobile.jpg";
import cartIcon from "../src/assets/images/icon-cart.svg";
import useViewMode from "./hooks/useViewMode";
import ProductDetails from "./components/ProductDetails";

function App() {
  const viewMode = useViewMode();

  const productImage = viewMode === "MOBILE" ? mobileImage : desktopImage;

  return (
    <div className="app">
      <img src={productImage}></img>
      <div className="information">
        <ProductDetails />
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
