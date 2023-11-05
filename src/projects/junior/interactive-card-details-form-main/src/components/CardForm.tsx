import FormField from "./FormField";
import { IFormInput } from "./FormInput";

function CardForm() {
  const nameInput: IFormInput = {
    name: "name",
    placeholder: "e.g. Jane Appleseed",
    type: "text",
  };

  const numberInput: IFormInput = {
    name: "number",
    placeholder: "e.g. 1234 5678 9123 0000",
    type: "text",
  };

  const monthInput: IFormInput = {
    name: "month",
    placeholder: "MM",
    type: "text",
  };

  const yearInput: IFormInput = {
    name: "year",
    placeholder: "YY",
    type: "text",
  };

  const cvcInput: IFormInput = {
    name: "cvc",
    placeholder: "e.g. 123",
    type: "text",
  };

  return (
    <form>
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
