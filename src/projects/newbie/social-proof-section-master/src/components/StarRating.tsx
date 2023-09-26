import starIcon from "../assets/images/icon-star.svg";

function StarRating({ stars, category }: { stars: number; category: string }) {
  const starsArray = Array.from(Array(stars));
  const rating = stars === 1 ? "1 Star" : `${stars} Stars`;

  return (
    <div className="rating">
      <div className="stars">
        {starsArray.map((_, index) => (
          <img src={starIcon} key={index}></img>
        ))}
      </div>
      <p>
        Rated {rating} in {category}
      </p>
    </div>
  );
}

export default StarRating;
