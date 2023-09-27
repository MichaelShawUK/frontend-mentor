import { ICardContent } from "../data/types";

function CardFeature({ data }: { data: ICardContent }) {
  const className = `${data.className} card`;

  return (
    <section className={className}>
      <h2>{data.heading}</h2>
      <p>{data.description}</p>
      <img className="icon" src={data.icon}></img>
    </section>
  );
}

export default CardFeature;
