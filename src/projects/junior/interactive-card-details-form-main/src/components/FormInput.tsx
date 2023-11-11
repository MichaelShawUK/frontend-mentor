import Validation from "../models/Validation";
import AppContext from "../state/context";

import { useContext } from "react";

export interface IFormInput {
  id?: string;
  name: string;
  type: string;
  placeholder: string;
  validation: Validation;
  value: string;
}

interface Props extends IFormInput {
  index: number;
}

function FormInput({
  id,
  index,
  name,
  type,
  placeholder,
  validation,
  value,
}: Props) {
  const { state, dispatch } = useContext(AppContext);

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    if (state.formSubmitted) {
      const error = validation.validate(event.target.value);

      const formData = { ...state.enteredValues };
      formData[name] = value;

      const errors = { ...state.errors };
      errors[name] = error ? error : "";

      dispatch({
        type: "user_input",
        formData,
        errors,
      });
    }
  }

  return (
    <input
      className={state.errors[name] ? "input-error" : undefined}
      id={id}
      key={index}
      name={name}
      type={type}
      placeholder={placeholder}
      onChange={changeHandler}
    />
  );
}

export default FormInput;
