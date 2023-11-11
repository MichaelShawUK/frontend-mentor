import "./styles/css/index.css";
import InteractiveCards from "./components/InteractiveCards";
import CardForm from "./components/CardForm";
import desktopBg from "./assets/images/bg-main-desktop.png";
import AppContext, { initialState } from "./state/context";
import { reducerFn } from "./state/reducer";

import { useReducer } from "react";

function CardDetailsForm() {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="card-details-form">
        <img src={desktopBg} className="desktop-bg" />
        <InteractiveCards />
        <CardForm />
      </div>
    </AppContext.Provider>
  );
}

export default CardDetailsForm;
