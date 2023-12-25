import { useContext } from "react";
import DeviceContext from "../context/DeviceContext";

import { useAppSelector } from "../hooks/useRedux";
import { toggle } from "../store/slices/bookmark";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";

function Bookmark() {
  const device = useContext(DeviceContext);

  const dispatch: AppDispatch = useDispatch();

  const isBookmarked = useAppSelector((state) => state.bookmark.isBookmarked);

  return (
    <button
      className={`bookmark ${isBookmarked ? "selected" : ""}`}
      onClick={() => dispatch(toggle())}
    >
      <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
          <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
        </g>
      </svg>
      {device === "desktop" && (
        <p>{isBookmarked ? "Bookmarked" : "Bookmark"}</p>
      )}
    </button>
  );
}

export default Bookmark;
