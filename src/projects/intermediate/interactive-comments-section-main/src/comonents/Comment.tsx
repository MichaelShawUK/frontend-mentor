import { useState } from "react";

import { CommentType, ReplyType, isReply } from "../types/types.d";
import transformPath from "../util/transformPath";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  incrementCommentScore,
  decrementCommentScore,
  editComment,
} from "../app/commentsSlice";
import AddCommentForm from "./AddCommentForm";

interface Props {
  comment: CommentType | ReplyType;
  onDelete: (commentId: number) => void;
}

// function isReply(comment: CommentType | ReplyType): comment is ReplyType {
//   return (comment as ReplyType).replyingTo !== undefined;
// }

function Comment({ comment, onDelete }: Props) {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector((state) => state.currentUser);
  const [inEditMode, setInEditMode] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.content);
  const [showReplyForm, setShowReplyForm] = useState(false);

  const openReplyForm = () => setShowReplyForm(true);
  const closeReplyForm = () => setShowReplyForm(false);

  const isCurrentUser = currentUser.username === comment.user.username;

  function editCommentHandler(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    dispatch(editComment({ id: comment.id, content: editedComment }));
    setInEditMode(false);
    if (editedComment.trim().length === 0) setEditedComment(comment.content);
  }

  const editForm = (
    <form onSubmit={(event) => editCommentHandler(event)}>
      <textarea
        value={editedComment}
        onChange={(event) => setEditedComment(event.target.value)}
      ></textarea>
      <button>Update</button>
    </form>
  );

  const displayComment = (
    <p className="content">
      {isReply(comment) && <span>@{comment.replyingTo} </span>}
      {comment.content}
    </p>
  );

  const content = inEditMode ? editForm : displayComment;

  const editActions = (
    <>
      <button onClick={() => onDelete(comment.id)}>Delete</button>
      <button onClick={() => setInEditMode(true)}>Edit</button>
    </>
  );

  const respondActions = <button onClick={openReplyForm}>Reply</button>;

  const actions = isCurrentUser ? editActions : respondActions;

  return (
    <>
      <article className="comment">
        <div className="meta">
          <img src={transformPath(comment.user.image.png)} className="avatar" />
          <p className="author">{comment.user.username}</p>
          {isCurrentUser && <p className="current-user-badge">you</p>}
          <p className="age">{comment.createdAt}</p>
        </div>
        <div className="actions">{actions}</div>
        {content}
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
      {showReplyForm && (
        <AddCommentForm
          mode="REPLY"
          replyingTo={comment.user.username}
          parentId={comment.id}
          onSubmit={closeReplyForm}
        />
      )}
    </>
  );
}

export default Comment;
