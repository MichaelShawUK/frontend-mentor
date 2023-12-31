interface Props {
  image: string;
  title: string;
}

function Creation({ image, title }: Props) {
  return (
    <div className="creation">
      <img src={image} />
      <h4>{title}</h4>
    </div>
  );
}

export default Creation;
