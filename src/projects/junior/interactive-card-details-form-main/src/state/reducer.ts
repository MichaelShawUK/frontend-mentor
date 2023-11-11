import { IFormData } from "../components/CardForm";

export interface IReducerState {
  formSubmitted: boolean;
  enteredValues: IFormData;
  errors: IFormData;
}

export interface IReducerAction {
  type: string;
  formData: IFormData;
  errors: IFormData;
}

export function reducerFn(state: IReducerState, action: IReducerAction) {
  switch (action.type) {
    case "submit_form": {
      return {
        formSubmitted: true,
        enteredValues: action.formData,
        errors: action.errors,
      };
    }
    case "user_input": {
      return {
        formSubmitted: state.formSubmitted,
        enteredValues: action.formData,
        errors: action.errors,
      };
    }
    default:
      return state;
  }
}
