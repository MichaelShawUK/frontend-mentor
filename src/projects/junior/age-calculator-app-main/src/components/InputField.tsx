interface Props {
  label: string;
  placeholder: string;
  error: string;
}

function InputField({ label, placeholder, error }: Props) {
  const inputFieldClass = error ? "field error" : "field";

  return (
    <div className={inputFieldClass}>
      <label htmlFor={label}>{label.toUpperCase()}</label>
      <input type="text" name={label} id={label} placeholder={placeholder} />
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}

export default InputField;
