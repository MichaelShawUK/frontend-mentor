interface Category {
  id: string;
  icon: string;
  category: string;
  score: number;
  color: string;
}

interface Props {
  category: Category;
}

function CategoryScore({ category }: Props) {
  const { icon, category: name, score } = category;
  const className = `${name.toLowerCase()} category`;

  return (
    <div className={className}>
      <i className="icon">
        <img src={icon}></img>
      </i>
      <span className="title">{name}</span>
      <div className="score">
        <span className="total">{score}</span> / 100
      </div>
    </div>
  );
}

export default CategoryScore;
