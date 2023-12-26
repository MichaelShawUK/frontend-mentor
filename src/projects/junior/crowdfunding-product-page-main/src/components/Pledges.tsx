import { useRef, useEffect, useCallback } from "react";

import { rewards } from "./Rewards";
import { RewardType } from "./Reward";
import Pledge from "./Pledge";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { closeModal } from "../store/slices/modal";
import { useAppSelector } from "../hooks/useRedux";

const emptyPledge: RewardType = {
  id: 0,
  title: "Pledge with no reward",
  minimum: null,
  description:
    "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
  remaining: null,
};

function Pledges() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const isModalOpen = useAppSelector((state) => state.modal.isOpen);

  const dispatch: AppDispatch = useDispatch();

  const close = useCallback(() => {
    dispatch(closeModal());
  }, [dispatch]);

  useEffect(() => {
    if (isModalOpen && dialogRef.current) dialogRef.current.showModal();
    if (!isModalOpen && dialogRef.current) dialogRef.current.close();
  }, [isModalOpen]);

  useEffect(() => {
    const modal = dialogRef.current;

    modal?.addEventListener("close", close);

    return () => {
      modal?.removeEventListener("close", close);
      close();
    };
  }, [close]);

  return (
    <dialog ref={dialogRef} className="pledges">
      <div className="margin-wrapper">
        <svg
          width="15"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
          className="close icon"
          onClick={close}
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
        <Pledge pledge={emptyPledge} />
        {rewards.map((pledge) => (
          <Pledge pledge={pledge} key={pledge.id} />
        ))}
      </div>
    </dialog>
  );
}

export default Pledges;
