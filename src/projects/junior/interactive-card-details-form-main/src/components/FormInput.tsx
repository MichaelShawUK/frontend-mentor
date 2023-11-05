export interface IFormInput {
  id?: string;
  name: string;
  type: string;
  placeholder: string;
}

interface Props extends IFormInput {
  index: number;
}

function FormInput({ id, index, name, type, placeholder }: Props) {
  return (
    <input
      id={id}
      key={index}
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
}

export default FormInput;
