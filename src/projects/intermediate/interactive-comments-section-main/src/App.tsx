import { useState } from "react";

import "./styles/css/index.css";
import data from "./data.json";
import transformPath from "./util/transformPath";
import CurrentUserContext from "./context/CurrentUserContext";
import Comments from "./comonents/Comments";
import AddCommentForm from "./comonents/AddCommentForm";

function InteractiveComments() {
  const [comments, setComments] = useState(data.comments);

  const currentUser = {
    username: data.currentUser.username,
    avatar: transformPath(data.currentUser.image.png),
  };

  function onAddComment() {}

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="interactive-comments">
        <Comments comments={comments} />
        <AddCommentForm />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default InteractiveComments;
