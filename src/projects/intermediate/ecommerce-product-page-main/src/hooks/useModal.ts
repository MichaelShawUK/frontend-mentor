import { useEffect, useRef } from "react";

function useModal(show: boolean, onClose: () => void) {
  const modalRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = modalRef.current;

    if (modal && show) modal.showModal();
    if (modal && !show) modal.close();
  }, [show]);

  useEffect(() => {
    const modal = modalRef.current;

    if (modal) modal.addEventListener("close", onClose);

    return () => modal?.removeEventListener("close", onClose);
  }, [onClose]);

  return modalRef;
}

export default useModal;
