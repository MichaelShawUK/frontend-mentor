function Comment({ comment, isCurrentUser }) {
  return (
    <article className="comment">
      <div className="meta">
        <img src={} className="avatar" />
        <p className="author">{}</p>
        {isCurrentUser && <p className="current-user-badge">you</p>}
        <p className="age">{}</p>
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
      <p className="content">{}</p>
      <div className="score">
        <button>+</button>
        <span>{}</span>
        <button>-</button>
      </div>
    </article>
  );
}

export default Comment;
