import { useState } from "react";

// import CurrentUserContext from "../context/CurrentUserContext";
// import { revertPath } from "../util/transformPath";
// import { CommentType } from "../types/types";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addComment } from "../app/commentsSlice";

// interface Props {
//   onAddComment: (comment: CommentType) => void;
// }

function AddCommentForm() {
  const currentUser = useAppSelector((state) => state.currentUser);

  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState("");

  function submitFormHandler(event: React.FormEvent) {
    event.preventDefault();
    const comment = inputValue.trim();

    if (comment.length === 0) return;
    dispatch(
      addComment({
        content: comment,
        username: currentUser.username,
        avatar: currentUser.avatar,
      })
    );

    // const commentObject: CommentType = {
    //   id: Math.random(),
    //   content: comment,
    //   createdAt: "just now",
    //   score: 1,
    //   user: {
    //     image: {
    //       png: revertPath(currentUser.avatar),
    //       webp: "",
    //     },
    //     username: currentUser.username,
    //   },
    //   replies: [],
    // };

    // onAddComment(commentObject);
    setInputValue("");
  }

  return (
    <section className="add-comment-form">
      <img src={currentUser.avatar} />
      <form onSubmit={submitFormHandler}>
        <textarea
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
        ></textarea>
        <button>Send</button>
      </form>
    </section>
  );
}

export default AddCommentForm;
