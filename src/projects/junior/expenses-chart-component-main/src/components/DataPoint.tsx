interface IDataPoint {
  day: string;
  amount: number;
  percentage: number;
}

interface Props {
  data: IDataPoint;
}

function getParent(event: React.MouseEvent<HTMLElement>) {
  return (event.target as HTMLElement).parentElement as HTMLElement;
}

function clickHandler(event: React.MouseEvent<HTMLDivElement>) {
  const parent = getParent(event);
  parent.classList.toggle("selected");
  parent.classList.remove("mouse-over");
}

function mouseEnterHandler(event: React.MouseEvent<HTMLDivElement>) {
  const parent = getParent(event);
  if (Array.from(parent.classList).includes("selected")) return;
  parent.classList.add("mouse-over");
}

function mouseLeaveHandler(event: React.MouseEvent<HTMLDivElement>) {
  const parent = getParent(event);
  parent.classList.remove("mouse-over");
}

function DataPoint({ data }: Props) {
  return (
    <div className="data-point">
      <p className="amount">{`$${data.amount}`}</p>
      <div
        className="bar"
        style={{ height: `${data.percentage * 4}px` }}
        onClick={clickHandler}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      ></div>
      <p className="day">{data.day}</p>
    </div>
  );
}

export default DataPoint;
