import errorIcon from "../assets/images/icon-error.svg";

interface Props {
  error: string;
  type: string;
  placeholder: string;
}

function FormField({ error, type, placeholder }: Props) {
  return (
    <div className={`field ${error ? "error" : ""}`}>
      <input type={type} placeholder={placeholder} />
      <img src={errorIcon} className="error-icon"></img>
      <p className="error-message red">{error}</p>
    </div>
  );
}

export default FormField;
