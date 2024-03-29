import { SvgProps } from "../app/types";

function MinusIcon({
  width = "100%",
  height = "100%",
  color = "#FF7E1B",
}: SvgProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 4"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <defs>
        <path
          d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
          id="a"
        />
      </defs>
      <use fill={color} fillRule="nonzero" xlinkHref="#a" />
    </svg>
  );
}

export default MinusIcon;
