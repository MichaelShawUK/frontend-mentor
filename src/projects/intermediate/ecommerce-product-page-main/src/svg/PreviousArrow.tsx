interface Props {
  width?: string;
  height?: string;
  color?: string;
}

function PreviousArrow({
  width = "100%",
  height = "100%",
  color = "#1D2026",
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 1 3 9l8 8"
        stroke={color}
        strokeWidth="4"
        fill="none"
        fillRule="evenodd"
      />
    </svg>
  );
}

export default PreviousArrow;
