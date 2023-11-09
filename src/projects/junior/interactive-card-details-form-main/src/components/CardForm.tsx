import FormField from "./FormField";
import { IFormInput } from "./FormInput";
import Validation from "../models/Validation";

import { createContext, useReducer } from "react";

export const FormSubmissionContext = createContext(false);

const nameInput: IFormInput = {
  name: "name",
  placeholder: "e.g. Jane Appleseed",
  type: "text",
  validation: new Validation().isNotEmpty().isAlpha(),
};

const numberInput: IFormInput = {
  name: "number",
  placeholder: "e.g. 1234 5678 9123 0000",
  type: "text",
  validation: new Validation().isNotEmpty().isNumber().isLength(16),
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
};

const yearInput: IFormInput = {
  name: "year",
  placeholder: "YY",
  type: "text",
  validation: new Validation().isNotEmpty().isNumber().isLength(2),
};

const cvcInput: IFormInput = {
  name: "cvc",
  placeholder: "e.g. 123",
  type: "text",
  validation: new Validation().isNotEmpty().isNumber().isLength(3),
};

const inputs = [nameInput, numberInput, monthInput, yearInput, cvcInput];

interface IReducerState {
  formSubmitted: boolean;
  inputs: IFormInput[];
}

type FormData = {
  [key: string]: string;
};

interface IReducerAction {
  type: string;
  formData: FormData;
}

function reducer(state: IReducerState, action: IReducerAction) {
  switch (action.type) {
    case "submit_form": {
      console.log("*** submitting form");
      console.log(action.formData);
      const updateInputs = inputs.map((input) => {
        console.log(input);
        input.validation.validate(action.formData[input.name]);
        console.log(input);
        return input;
      });

      return {
        formSubmitted: true,
        inputs: updateInputs,
      };
    }
    default:
      return state;
  }
}

const initialState: IReducerState = {
  formSubmitted: false,
  inputs,
};

export const FormContext = createContext<IReducerState>(initialState);

function CardForm() {
  // const [formSubmitted, setFormSubmitted] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialState);

  function submitHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    // setFormSubmitted(true);
    dispatch({
      type: "submit_form",
      formData: Object.fromEntries(formData.entries()) as FormData,
    });
  }

  return (
    <FormContext.Provider value={state}>
      {/* <FormSubmissionContext.Provider value={state.formSubmitted}> */}
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
      {/* </FormSubmissionContext.Provider> */}
    </FormContext.Provider>
  );
}

export default CardForm;
