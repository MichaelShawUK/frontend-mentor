// import { useState } from "react";
import { Provider } from "react-redux";

import "./styles/css/index.css";
// import data from "./data.json";
// import transformPath from "./util/transformPath";
// import CurrentUserContext from "./context/CurrentUserContext";
import Comments from "./comonents/Comments";
import AddCommentForm from "./comonents/AddCommentForm";
// import { CommentType } from "./types/types";
import store from "./app/store";

function InteractiveComments() {
  // const [comments, setComments] = useState(data.comments);

  // const currentUser = {
  //   username: data.currentUser.username,
  //   avatar: transformPath(data.currentUser.image.png),
  // };

  // function addComment(comment: CommentType) {
  //   setComments((comments) => comments.concat(comment));
  // }

  // function incrementCommentScore(id: number) {
  //   setComments((comments) => {
  //     const updateComments = comments.slice();
  //     const targetComment = updateComments.findIndex(
  //       (comment) => comment.id === id
  //     );
  //     console.log(targetComment);
  //     updateComments[targetComment].score++;
  //     return updateComments;
  //   });
  // }

  return (
    // <CurrentUserContext.Provider value={currentUser}>
    <Provider store={store}>
      <div className="interactive-comments">
        <Comments />
        <AddCommentForm />
      </div>
    </Provider>
    // </CurrentUserContext.Provider>
  );
}

export default InteractiveComments;
