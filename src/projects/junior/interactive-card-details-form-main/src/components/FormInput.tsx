import Validation from "../models/Validation";

import { useState } from "react";

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

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    validation.validate(event.target.value);
    checkError();
    if (validation.error) setClassName("input-error");
    else setClassName(undefined);
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
