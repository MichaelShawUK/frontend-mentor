import mastercraftLogo from "../assets/images/logo-mastercraft.svg";
import Bookmark from "./Bookmark";

interface Props {
  title: string;
  description: string;
}

function Summary({ title, description }: Props) {
  return (
    <div className="summary">
      <img src={mastercraftLogo} className="mastercraft-logo" />
      <h1>{title}</h1>
      <p className="description">{description}</p>
      <div className="actions">
        <button className="primary">Back this project</button>
        <Bookmark />
      </div>
    </div>
  );
}

export default Summary;
