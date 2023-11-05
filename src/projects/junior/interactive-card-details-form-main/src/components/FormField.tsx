import FormInput, { IFormInput } from "./FormInput";

interface Props {
  id: string;
  label: string;
  inputs: IFormInput[];
}

function FormField({ id, label, inputs }: Props) {
  inputs[0].id = id;

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {inputs.map(({ id, name, type, placeholder }, index) => (
        <FormInput
          key={index}
          index={index}
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
        />
      ))}
      <p className="error"></p>
    </div>
  );
}

export default FormField;
