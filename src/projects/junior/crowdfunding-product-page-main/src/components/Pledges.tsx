import { useRef, useEffect, useCallback } from "react";

interface Props {
  show: boolean;
  onClose: () => void;
}

function Pledges({ show, onClose }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  if (show && dialogRef.current) dialogRef.current.showModal();

  const closeModal = useCallback(() => {
    if (dialogRef.current) dialogRef.current.close();
    onClose();
  }, [onClose]);

  useEffect(() => {
    const modal = dialogRef.current;
    modal?.addEventListener("close", closeModal);

    return () => {
      modal?.removeEventListener("close", closeModal);
    };
  }, [closeModal]);

  return (
    <dialog className="pledges" ref={dialogRef}>
      <svg
        width="15"
        height="15"
        xmlns="http://www.w3.org/2000/svg"
        className="close icon"
        onClick={closeModal}
      >
        <path
          d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
          fill="#000"
          fillRule="evenodd"
          opacity=".4"
        />
      </svg>
      <h2>Back this project</h2>
      <p>
        Want to support us in bringing Mastercraft Bamboo Monior Riser out in
        the world?
      </p>
    </dialog>
  );
}

export default Pledges;
