import FormField from "./FormField";
import { IFormInput } from "./FormInput";
import Validation from "../models/Validation";
import AppContext from "../state/context";

import { useContext } from "react";

export interface IFormData {
  [key: string]: string;
}

function CardForm() {
  const { state, dispatch } = useContext(AppContext);

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
  );
}

export default CardForm;
