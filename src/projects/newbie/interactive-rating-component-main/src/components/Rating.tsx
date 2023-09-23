interface Props {
  useRatingState: [
    number | null,
    React.Dispatch<React.SetStateAction<number | null>>
  ];
}

function Rating({ useRatingState }: Props) {
  const [rating, setRating] = useRatingState;

  function ratingHandler(score: number) {
    if (score === rating) setRating(null);
    else setRating(score);
  }

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((score) => {
        const className = `circle ${score === rating ? "selected" : ""}`;

        return (
          <div
            key={score}
            className={className}
            onClick={() => ratingHandler(score)}
          >
            <span className="baseline-correct">{score}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Rating;
