import "./styles/css/index.css";

import InteractiveCards from "./components/InteractiveCards";
import CardForm from "./components/CardForm";
import desktopBg from "./assets/images/bg-main-desktop.png";

function CardDetailsForm() {
  return (
    <div className="card-details-form">
      <img src={desktopBg} className="desktop-bg" />
      <InteractiveCards />
      <CardForm />
    </div>
  );
}

export default CardDetailsForm;
