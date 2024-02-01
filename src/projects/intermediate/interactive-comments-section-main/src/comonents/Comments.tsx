import { useAppSelector } from "../app/hooks";
import Comment from "./Comment";
import { selectComments } from "../app/commentsSlice";

interface Props {
  deleteComment: (commentId: number) => void;
}

function Comments({ deleteComment }: Props) {
  const comments = useAppSelector(selectComments);

  return (
    <section className="comments">
      {comments.map((comment) => {
        if (comment.replies.length === 0) {
          return (
            <Comment
              comment={comment}
              key={comment.id}
              onDelete={deleteComment}
            />
          );
        } else {
          return (
            <div className="conversation" key={comment.id}>
              <Comment comment={comment} onDelete={deleteComment} />
              <div className="replies">
                {comment.replies.map((reply) => (
                  <Comment
                    comment={reply}
                    key={reply.id}
                    onDelete={deleteComment}
                  />
                ))}
              </div>
            </div>
          );
        }
      })}
    </section>
  );
}

export default Comments;
