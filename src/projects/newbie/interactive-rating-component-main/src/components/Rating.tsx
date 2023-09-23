import { useState } from "react";

function Rating() {
  const [rating, setRating] = useState<number | null>(null);

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
            <span>{score}</span>
          </div>
        );
      })}
    </div>
  );
}

export default Rating;
