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
    <form onSubmit={(event) => editCommentHandler(event)} className="content">
      <textarea
        value={editedComment}
        onChange={(event) => setEditedComment(event.target.value)}
      ></textarea>
      <button className="form send">Update</button>
    </form>
  );

  const displayComment = (
    <p className="content">
      {isReply(comment) && (
        <span className="replying-to">@{comment.replyingTo} </span>
      )}
      {comment.content}
    </p>
  );

  const content = inEditMode ? editForm : displayComment;

  const editActions = (
    <>
      <button className="icon delete" onClick={() => onDelete(comment.id)}>
        Delete
      </button>
      <button className="icon edit" onClick={() => setInEditMode(true)}>
        Edit
      </button>
    </>
  );

  const respondActions = (
    <button className="icon reply" onClick={openReplyForm}>
      Reply
    </button>
  );

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
            <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
                fill="#C5C6EF"
              />
            </svg>
          </button>
          <span>{comment.score}</span>
          <button onClick={() => dispatch(decrementCommentScore(comment.id))}>
            <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z"
                fill="#C5C6EF"
              />
            </svg>
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
