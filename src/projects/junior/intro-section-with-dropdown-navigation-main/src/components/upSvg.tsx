import { forwardRef } from "react";

const UpSvg = forwardRef<HTMLDivElement>(function upSvg(_props, ref) {
  return (
    <div ref={ref}>
      <svg
        width="16"
        height="6"
        xmlns="http://www.w3.org/2000/svg"
        className="arrow-svg"
      >
        <path stroke="#686868" strokeWidth="1.5" fill="none" d="m1 5 4-4 4 4" />
      </svg>
    </div>
  );
});

export default UpSvg;
