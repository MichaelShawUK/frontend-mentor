import FormInput, { IFormInput } from "./FormInput";

import { useState } from "react";

interface Props {
  id: string;
  label: string;
  inputs: IFormInput[];
}

function FormField({ id, label, inputs }: Props) {
  inputs[0].id = id;

  const [error, setError] = useState("");

  function onError() {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].validation.error) {
        setError(inputs[i].validation.error);
        break;
      } else setError("");
    }
  }

  return (
    <div className={`${id} field`}>
      <label htmlFor={id}>{label}</label>
      {inputs.map(({ id, name, type, placeholder, validation }, index) => (
        <FormInput
          key={index}
          index={index}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          validation={validation}
          checkError={onError}
        />
      ))}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default FormField;
