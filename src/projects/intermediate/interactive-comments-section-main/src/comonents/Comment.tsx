import { useContext } from "react";

import { CommentType, ReplyType } from "../types/types";
import CurrentUserContext from "../context/CurrentUserContext";
import transformPath from "../util/transformPath";

function Comment({ comment }: { comment: CommentType | ReplyType }) {
  const currentUser = useContext(CurrentUserContext);

  const isCurrentUser = currentUser.username === comment.user.username;

  return (
    <article className="comment">
      <div className="meta">
        <img src={transformPath(comment.user.image.png)} className="avatar" />
        <p className="author">{comment.user.username}</p>
        {isCurrentUser && <p className="current-user-badge">you</p>}
        <p className="age">{comment.createdAt}</p>
      </div>
      <div className="actions">
        {isCurrentUser ? (
          <>
            <button>Delete</button>
            <button>Edit</button>
          </>
        ) : (
          <button>Reply</button>
        )}
      </div>
      <p className="content">{comment.content}</p>
      <div className="score">
        <button>+</button>
        <span>{comment.score}</span>
        <button>-</button>
      </div>
    </article>
  );
}

export default Comment;
