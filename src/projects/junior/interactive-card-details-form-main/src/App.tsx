import "./styles/css/index.css";

import InteractiveCards from "./components/InteractiveCards";
import CardForm from "./components/CardForm";

function CardDetailsForm() {
  return (
    <div className="card-details-form">
      <InteractiveCards />
      <CardForm />
    </div>
  );
}

export default CardDetailsForm;
