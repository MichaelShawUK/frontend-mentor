import logo from "../assets/images/card-logo.svg";
import AppContext from "../state/context";

import { useContext } from "react";

function CardFront() {
  const { state } = useContext(AppContext);
  let { name, number, month, year } = state.enteredValues;
  name = name ? name : "JANE APPLESEED";
  number = number ? number : "0000 0000 0000 0000";
  month = month ? month : "MM";
  year = year ? year : "YY";

  const formatNumber = number
    .split(" ")
    .join("")
    .match(/.{1,4}/g)
    ?.join(" ");

  return (
    <div className="card-front">
      <div className="wrapper">
        <img src={logo} className="logo" />
        <div className="card-details">
          <p className="card-number">{formatNumber}</p>
          <p className="card-name">{name.toUpperCase()}</p>
          <p className="card-expiry">
            {month}/{year}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardFront;
