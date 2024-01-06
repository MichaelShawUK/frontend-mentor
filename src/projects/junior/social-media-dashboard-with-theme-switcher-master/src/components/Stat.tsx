import { InteractionType } from "../data/interactions";

interface Props {
  stat: InteractionType;
}

const formatter = Intl.NumberFormat("en", { notation: "compact" });

function Stat({ stat }: Props) {
  const { metric, platform, quantity, percentChange } = stat;

  return (
    <section className="stat">
      <p className="metric">{metric}</p>
      <img src={platform} className="icon" />
      <p className="quantity">
        {quantity > 9999 ? formatter.format(quantity) : quantity}
      </p>
      <p className={`change ${percentChange > 0 ? "increase" : "decrease"}`}>
        {Math.abs(percentChange)}%
      </p>
    </section>
  );
}

export default Stat;
