import FormField from "./FormField";
import { IFormInput } from "./FormInput";
import Validation from "../models/Validation";

import { createContext, useReducer } from "react";

export const FormSubmissionContext = createContext(false);

interface IFormData {
  [key: string]: string;
}

interface IReducerState {
  formSubmitted: boolean;
  enteredValues: IFormData;
  errors: IFormData;
}

interface IReducerAction {
  type: string;
  formData: IFormData;
  errors: IFormData;
}

function reducer(state: IReducerState, action: IReducerAction) {
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

const initialState: IReducerState = {
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

export const FormContext = createContext<{
  state: IReducerState;
  dispatch: React.Dispatch<IReducerAction>;
}>({ state: initialState, dispatch: () => null });

function CardForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const nameInput: IFormInput = {
    name: "name",
    placeholder: "e.g. Jane Appleseed",
    type: "text",
    validation: new Validation().isNotEmpty().isAlpha(),
    value: state.enteredValues.name,
  };

  const numberInput: IFormInput = {
    name: "number",
    placeholder: "e.g. 1234 5678 9123 0000",
    type: "text",
    validation: new Validation().isNotEmpty().isNumber().isLength(16),
    value: state.enteredValues.number,
  };

  const monthInput: IFormInput = {
    name: "month",
    placeholder: "MM",
    type: "text",
    validation: new Validation()
      .isNotEmpty()
      .isNumber()
      .isLength(2)
      .isGreaterThan(0)
      .isLessThan(13),
    value: state.enteredValues.month,
  };

  const yearInput: IFormInput = {
    name: "year",
    placeholder: "YY",
    type: "text",
    validation: new Validation().isNotEmpty().isNumber().isLength(2),
    value: state.enteredValues.year,
  };

  const cvcInput: IFormInput = {
    name: "cvc",
    placeholder: "e.g. 123",
    type: "text",
    validation: new Validation().isNotEmpty().isNumber().isLength(3),
    value: state.enteredValues.cvc,
  };

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = Object.fromEntries(
      new FormData(event.target as HTMLFormElement).entries()
    ) as IFormData;

    dispatch({
      type: "submit_form",
      formData,
      errors: {
        name: nameInput.validation.validate(formData.name)!,
        number: numberInput.validation.validate(formData.number)!,
        month: monthInput.validation.validate(formData.month)!,
        year: yearInput.validation.validate(formData.year)!,
        cvc: cvcInput.validation.validate(formData.cvc)!,
      },
    });
  }

  return (
    <FormContext.Provider value={{ state, dispatch }}>
      <form onSubmit={submitHandler}>
        <FormField id="name" label="CARDHOLDER NAME" inputs={[nameInput]} />
        <FormField id="number" label="CARD NUMBER" inputs={[numberInput]} />
        <FormField
          id="expiry"
          label="EXP. DATE (MM/YY)"
          inputs={[monthInput, yearInput]}
        />
        <FormField id="cvc" label="CVC" inputs={[cvcInput]} />
        <button>Confirm</button>
      </form>
    </FormContext.Provider>
  );
}

export default CardForm;
