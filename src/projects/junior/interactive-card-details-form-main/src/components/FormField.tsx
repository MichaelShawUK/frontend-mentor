import FormInput, { IFormInput } from "./FormInput";
import { FormContext } from "./CardForm";

import { useContext } from "react";

interface Props {
  id: string;
  label: string;
  inputs: IFormInput[];
}

function FormField({ id, label, inputs }: Props) {
  const { state } = useContext(FormContext);

  let error = "";
  for (let i = 0; i < inputs.length; i++) {
    if (state.errors[inputs[i].name]) {
      error = state.errors[inputs[i].name];
      break;
    }
  }

  inputs[0].id = id;

  return (
    <div className={`${id} field`}>
      <label htmlFor={id}>{label}</label>
      {inputs.map(
        ({ id, name, type, placeholder, validation, value }, index) => (
          <FormInput
            key={index}
            index={index}
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            validation={validation}
            value={value}
          />
        )
      )}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default FormField;
