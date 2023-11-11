import { IFormData } from "../components/CardForm";

export interface IReducerState {
  formSubmitted: boolean;
  success: boolean;
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
      let success = true;
      for (const error of Object.values(action.errors)) {
        if (error) success = false;
      }
      return {
        formSubmitted: true,
        success,
        enteredValues: action.formData,
        errors: action.errors,
      };
    }
    case "user_input": {
      return {
        formSubmitted: state.formSubmitted,
        success: false,
        enteredValues: action.formData,
        errors: action.errors,
      };
    }
    default:
      return state;
  }
}
