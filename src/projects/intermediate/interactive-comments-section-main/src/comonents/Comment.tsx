import { CommentType, ReplyType } from "../types/types";
import transformPath from "../util/transformPath";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  incrementCommentScore,
  decrementCommentScore,
} from "../app/commentsSlice";

interface Props {
  comment: CommentType | ReplyType;
  onDelete: (commentId: number) => void;
}

function Comment({ comment, onDelete }: Props) {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.currentUser);

  const isCurrentUser = currentUser.username === comment.user.username;

  function isReply(comment: CommentType | ReplyType): comment is ReplyType {
    return (comment as ReplyType).replyingTo !== undefined;
  }

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
            <button onClick={() => onDelete(comment.id)}>Delete</button>
            <button>Edit</button>
          </>
        ) : (
          <button>Reply</button>
        )}
      </div>
      <p className="content">
        {isReply(comment) && <span>@{comment.replyingTo} </span>}
        {comment.content}
      </p>
      <div className="score">
        <button onClick={() => dispatch(incrementCommentScore(comment.id))}>
          +
        </button>
        <span>{comment.score}</span>
        <button onClick={() => dispatch(decrementCommentScore(comment.id))}>
          -
        </button>
      </div>
    </article>
  );
}

export default Comment;
