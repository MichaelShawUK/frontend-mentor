import { CommentType } from "../types/types";
import Comment from "./Comment";

function Comments({ comments }: { comments: CommentType[] }) {
  return (
    <section className="comments">
      {comments.map((comment) => {
        if (comment.replies.length === 0) {
          return <Comment comment={comment} key={comment.id} />;
        } else {
          return (
            <div className="conversation" key={comment.id}>
              <Comment comment={comment} />
              <div className="replies">
                {comment.replies.map((reply) => (
                  <Comment comment={reply} key={reply.id} />
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
