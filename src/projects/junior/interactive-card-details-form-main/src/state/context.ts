import { IReducerAction, IReducerState } from "./reducer";

import { createContext } from "react";

export const initialState: IReducerState = {
  formSubmitted: false,
  enteredValues: {
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  },
  errors: {
    name: "",
    number: "",
    month: "",
    year: "",
    cvc: "",
  },
};

const AppContext = createContext<{
  state: IReducerState;
  dispatch: React.Dispatch<IReducerAction>;
}>({ state: initialState, dispatch: () => null });

export default AppContext;
