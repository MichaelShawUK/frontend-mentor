import mastercraftLogo from "../assets/images/logo-mastercraft.svg";
import Bookmark from "./Bookmark";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { openModal } from "../store/slices/modal";

interface Props {
  title: string;
  description: string;
}

function Summary({ title, description }: Props) {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className="summary">
      <img src={mastercraftLogo} className="mastercraft-logo" />
      <h1>{title}</h1>
      <p className="description">{description}</p>
      <div className="actions">
        <button className="primary" onClick={() => dispatch(openModal())}>
          Back this project
        </button>
        <Bookmark />
      </div>
    </div>
  );
}

export default Summary;
