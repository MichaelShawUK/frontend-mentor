import Validation from "../models/Validation";
// import { FormSubmissionContext } from "./CardForm";
import { FormContext } from "./CardForm";

import { useState, useContext } from "react";

export interface IFormInput {
  id?: string;
  name: string;
  type: string;
  placeholder: string;
  validation: Validation;
}

interface Props extends IFormInput {
  index: number;
  checkError: () => void;
}

function FormInput({
  id,
  index,
  name,
  type,
  placeholder,
  validation,
  checkError,
}: Props) {
  const [className, setClassName] = useState<string>();
  // const formSubmitted = useContext(FormSubmissionContext);
  const state = useContext(FormContext);

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    if (state.formSubmitted) {
      validation.validate(event.target.value);
      checkError();
      if (validation.error) setClassName("input-error");
      else setClassName(undefined);
    }
  }

  return (
    <input
      className={className}
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
