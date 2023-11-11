import "./styles/css/index.css";
import InteractiveCards from "./components/InteractiveCards";
import CardForm from "./components/CardForm";
import Success from "./components/Success";
import desktopBg from "./assets/images/bg-main-desktop.png";
import mobileBg from "./assets/images/bg-main-mobile.png";
import AppContext, { initialState } from "./state/context";
import { reducerFn } from "./state/reducer";
import useViewMode from "./hooks/useViewMode";

import { useReducer } from "react";

function CardDetailsForm() {
  const [state, dispatch] = useReducer(reducerFn, initialState);

  const background =
    useViewMode() === "MOBILE" ? (
      <img src={mobileBg} className="mobile-bg" />
    ) : (
      <img src={desktopBg} className="desktop-bg" />
    );

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="card-details-form">
        {background}
        <InteractiveCards />
        {state.success ? <Success /> : <CardForm />}
      </div>
    </AppContext.Provider>
  );
}

export default CardDetailsForm;
