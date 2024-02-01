import { useContext } from "react";

import CurrentUserContext from "../context/CurrentUserContext";

function AddCommentForm() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="add-comment-form">
      <img src={currentUser.avatar} />
      <form>
        <textarea></textarea>
        <button>Send</button>
      </form>
    </section>
  );
}

export default AddCommentForm;
