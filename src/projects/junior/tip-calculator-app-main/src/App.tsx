import "../src/styles/css/index.css";
import logo from "./assets/images/logo.svg";
import dollarIcon from "../src/assets/images/icon-dollar.svg";
import personIcon from "../src/assets/images/icon-person.svg";

function TipCalculator() {
  return (
    <div className="tip-calculator-app">
      <header>
        <img src={logo} />
      </header>
      <main className="calculator">
        <form>
          <div className="field">
            <label htmlFor="bill">Bill</label>
            <div className="icon-wrapper">
              <img src={dollarIcon} className="icon" />
              <input type="number" id="bill" name="bill" />
            </div>
          </div>
          <fieldset>
            <legend>Select Tip %</legend>
            <label htmlFor="5">5%</label>
            <input type="radio" id="5" name="tip" value="5" />
            <label htmlFor="10">10%</label>
            <input type="radio" id="10" name="tip" value="10" />
            <label htmlFor="15">15%</label>
            <input type="radio" id="15" name="tip" value="15" />
            <label htmlFor="25">25%</label>
            <input type="radio" id="25" name="tip" value="25" />
            <label htmlFor="50">50%</label>
            <input type="radio" id="50" name="tip" value="50" />
            <label htmlFor="custom" className="custom">
              Custom
            </label>
            <input type="radio" id="custom" name="tip" value="custom" />
          </fieldset>
          <div className="field error">
            <div className="flex-container">
              <label htmlFor="people">Number of People</label>
              <p className="error-message">Can't be zero</p>
            </div>
            <div className="icon-wrapper">
              <img src={personIcon} className="icon" />
              <input type="number" id="people" name="people" />
            </div>
          </div>
          {/* <button>HO</button> */}
        </form>
        <div className="output">
          <div className="calculation">
            <p className="category">
              Tip Amount<span>/ person</span>
            </p>
            <p className="result">$4.27</p>
          </div>
          <div className="calculation">
            <p className="category">
              Total<span>/ person</span>
            </p>
            <p className="result">$32.79</p>
          </div>
          <button>RESET</button>
        </div>
      </main>
    </div>
  );
}

export default TipCalculator;
