import mastercraftLogo from "../assets/images/logo-mastercraft.svg";
import Bookmark from "./Bookmark";

interface Props {
  title: string;
  description: string;
  openModal: () => void;
}

function Summary({ title, description, openModal }: Props) {
  return (
    <div className="summary">
      <img src={mastercraftLogo} className="mastercraft-logo" />
      <h1>{title}</h1>
      <p className="description">{description}</p>
      <div className="actions">
        <button className="primary" onClick={openModal}>
          Back this project
        </button>
        <Bookmark />
      </div>
    </div>
  );
}

export default Summary;
