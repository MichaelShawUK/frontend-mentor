import { Provider } from "react-redux";
import { useState } from "react";

import "./styles/css/index.css";
import Comments from "./comonents/Comments";
import AddCommentForm from "./comonents/AddCommentForm";
import DeleteModal from "./comonents/DeleteModal";
import store from "./app/store";

function InteractiveComments() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const closeModal = () => setShowDeleteModal(false);
  const openModal = () => setShowDeleteModal(true);
  const [commentToDelete, setCommentToDelete] = useState<null | number>(null);

  const deleteComment = (commentId: number) => {
    openModal();
    setCommentToDelete(commentId);
  };

  return (
    <Provider store={store}>
      <div className="interactive-comments">
        <DeleteModal
          showModal={showDeleteModal}
          onClose={closeModal}
          commentToDelete={commentToDelete}
        />
        <Comments deleteComment={deleteComment} />
        <div className="new-comment-wrapper">
          <AddCommentForm mode="NEW COMMENT" />
        </div>
      </div>
    </Provider>
  );
}

export default InteractiveComments;
