import { useState } from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addComment, addReply } from "../app/commentsSlice";

interface Props {
  mode: "NEW COMMENT" | "REPLY";
  replyingTo?: string;
  parentId?: number;
  onSubmit?: () => void;
}

function AddCommentForm({ mode, replyingTo, parentId, onSubmit }: Props) {
  const currentUser = useAppSelector((state) => state.currentUser);

  const dispatch = useAppDispatch();

  const [inputValue, setInputValue] = useState("");

  function submitFormHandler(event: React.FormEvent) {
    event.preventDefault();
    const comment = inputValue.trim();

    if (comment.length === 0) {
      if (mode === "REPLY" && onSubmit) onSubmit();
      return;
    }

    if (mode === "NEW COMMENT") {
      dispatch(
        addComment({
          content: comment,
          username: currentUser.username,
          avatar: currentUser.avatar,
        })
      );
    }

    if (mode === "REPLY" && parentId && replyingTo && onSubmit) {
      dispatch(
        addReply({
          parentId,
          replyingTo,
          content: comment,
          username: currentUser.username,
          avatar: currentUser.avatar,
        })
      );
      onSubmit();
    }

    setInputValue("");
  }

  return (
    <section className="add-comment-form">
      <img src={currentUser.avatar} className="avatar" />
      <form onSubmit={submitFormHandler}>
        <textarea
          onChange={(event) => setInputValue(event.target.value)}
          value={inputValue}
          placeholder="Add a comment..."
        ></textarea>
        <button className="form send">
          {mode === "REPLY" ? "Reply" : "Send"}
        </button>
      </form>
    </section>
  );
}

export default AddCommentForm;
