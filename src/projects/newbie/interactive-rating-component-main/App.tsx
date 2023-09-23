import "./src/styles/css/index.css";
import star from "./src/assets/images/icon-star.svg";
import Rating from "./src/components/Rating";

function App() {
  return (
    <div className="app">
      <div className="circle">
        <img src={star}></img>
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <Rating />
      <button>SUBMIT</button>
    </div>
  );
}

export default App;
