import "./styles/css/index.css";
import heroIllustration from "./assets/images/illustration-hero.svg";
import OrderSummary from "./components/OrderSummary";

function App() {
  return (
    <div className="app">
      <img className="hero" src={heroIllustration}></img>
      <OrderSummary />
    </div>
  );
}

export default App;
