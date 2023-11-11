import AppContext from "../state/context";

import { useContext } from "react";

function CardBack() {
  const { state } = useContext(AppContext);
  const cvc = state.enteredValues.cvc ? state.enteredValues.cvc : "123";

  return (
    <div className="card-back">
      <p className="cvc-strip">{cvc}</p>
    </div>
  );
}

export default CardBack;
