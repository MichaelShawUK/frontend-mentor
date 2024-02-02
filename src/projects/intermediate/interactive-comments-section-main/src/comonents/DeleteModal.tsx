import { useEffect, useRef } from "react";

import { useAppDispatch } from "../app/hooks";
import { removeComment } from "../app/commentsSlice";

interface Props {
  showModal: boolean;
  onClose: () => void;
  commentToDelete: number | null;
}

function DeleteModal({ showModal, onClose, commentToDelete }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const dispatch = useAppDispatch();

  function confirmCommentDeletion() {
    dispatch(removeComment(commentToDelete));
    onClose();
  }

  useEffect(() => {
    const modal = dialogRef.current;

    if (modal) {
      showModal ? modal.showModal() : modal.close();
    }
  }, [showModal]);

  useEffect(() => {
    const modal = dialogRef.current;

    if (modal) {
      modal.addEventListener("close", onClose);

      return () => modal.removeEventListener("close", onClose);
    }
  }, [onClose]);

  return (
    <dialog className="modal" ref={dialogRef}>
      <div className="flex-container">
        <div className="wrapper">
          <h2>Delete comment</h2>
          <p>
            Are you sure you want to delete this comment? This will remove the
            comment and can't be undone.
          </p>
          <div className="actions">
            <button
              className="form cancel"
              onClick={() => dialogRef.current?.close()}
            >
              No, Cancel
            </button>
            <button className="form confirm" onClick={confirmCommentDeletion}>
              Yes, Delete
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}

export default DeleteModal;
