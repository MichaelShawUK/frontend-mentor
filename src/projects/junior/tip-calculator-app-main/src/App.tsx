import "../src/styles/css/index.css";
import logo from "./assets/images/logo.svg";
import dollarIcon from "../src/assets/images/icon-dollar.svg";
import personIcon from "../src/assets/images/icon-person.svg";

import { useState } from "react";

function TipCalculator() {
  const [error, setError] = useState(false);
  const [custom, setCustom] = useState(false);
  const [tip, setTip] = useState(0);
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");

  function customHandler() {
    setCustom(true);
    setTip(0);
  }

  function peopleHandler(event: React.ChangeEvent) {
    const value = (event.target as HTMLInputElement).value;
    if (value === "0" || value === "") setError(true);
    else setError(false);
    setPeople(value);
  }

  function tipHandler(event: React.ChangeEvent) {
    const value = (event.target as HTMLInputElement).value;
    setCustom(false);
    setTip(parseInt(value));
  }

  function billHandler(event: React.ChangeEvent) {
    const value = (event.target as HTMLInputElement).value;
    setBill(value);
  }

  function customAmountHandler(event: React.ChangeEvent) {
    const value = (event.target as HTMLInputElement).value;
    if (Number.isFinite(parseInt(value))) setTip(parseFloat(value));
    if (value === "") setTip(0);
  }

  function resetHandler() {
    setError(false);
    setCustom(false);
    setTip(0);
    setBill("");
    setPeople("");
  }

  const tipAmount =
    error || people === "" || bill === ""
      ? 0
      : (parseInt(bill) * (tip / 100)) / parseInt(people);

  const total =
    error || people === "" || bill === ""
      ? 0
      : (parseInt(bill) * (1 + tip / 100)) / parseInt(people);

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
              <input
                type="number"
                id="bill"
                name="bill"
                min="0"
                value={bill}
                onChange={billHandler}
              />
            </div>
          </div>
          <fieldset>
            <legend>Select Tip %</legend>
            <div className="grid-container">
              <label htmlFor="5" className={tip === 5 ? "selected" : undefined}>
                5%
              </label>
              <input
                type="radio"
                id="5"
                name="tip"
                value="5"
                onChange={tipHandler}
              />
              <label
                htmlFor="10"
                className={tip === 10 ? "selected" : undefined}
              >
                10%
              </label>
              <input
                type="radio"
                id="10"
                name="tip"
                value="10"
                onChange={tipHandler}
              />
              <label
                htmlFor="15"
                className={tip === 15 ? "selected" : undefined}
              >
                15%
              </label>
              <input
                type="radio"
                id="15"
                name="tip"
                value="15"
                onChange={tipHandler}
              />
              <label
                htmlFor="25"
                className={tip === 25 ? "selected" : undefined}
              >
                25%
              </label>
              <input
                type="radio"
                id="25"
                name="tip"
                value="25"
                onChange={tipHandler}
              />
              <label
                htmlFor="50"
                className={tip === 50 ? "selected" : undefined}
              >
                50%
              </label>
              <input
                type="radio"
                id="50"
                name="tip"
                value="50"
                onChange={tipHandler}
              />
              {!custom && (
                <label htmlFor="custom" className="custom">
                  Custom
                </label>
              )}
              <input
                type="radio"
                id="custom"
                name="tip"
                value="custom"
                onChange={customHandler}
                checked={custom}
              />
              {custom && (
                <input
                  type="number"
                  className="custom-amount"
                  min="0"
                  autoFocus
                  onChange={customAmountHandler}
                />
              )}
            </div>
          </fieldset>
          <div className={error ? "field error" : "field"}>
            <div className="flex-container">
              <label htmlFor="people">Number of People</label>
              <p className="error-message">Can't be zero</p>
            </div>
            <div className="icon-wrapper">
              <img src={personIcon} className="icon" />
              <input
                type="number"
                id="people"
                name="people"
                min="1"
                value={people}
                onChange={peopleHandler}
              />
            </div>
          </div>
        </form>
        <div className="output">
          <div className="calculation">
            <p className="category">
              Tip Amount<span>/ person</span>
            </p>
            <p className="result">${tipAmount.toFixed(2)}</p>
          </div>
          <div className="calculation">
            <p className="category">
              Total<span>/ person</span>
            </p>
            <p className="result">${total.toFixed(2)}</p>
          </div>
          <button onClick={resetHandler}>RESET</button>
        </div>
      </main>
    </div>
  );
}

export default TipCalculator;
