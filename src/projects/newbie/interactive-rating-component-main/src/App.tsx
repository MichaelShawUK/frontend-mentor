import "./styles/css/index.css";
import UserPrompt from "./components/UserPrompt";
import ThankYou from "./components/ThankYou";

import { useState } from "react";

function App() {
  const useRatingState = useState<number | null>(null);
  const [ratingSubmitted, setRatingSubmitted] = useState(false);

  function ratingSubmissionHandler() {
    const rating = useRatingState[0];
    if (rating) setRatingSubmitted(true);
  }

  return (
    <div className="app">
      {ratingSubmitted ? (
        <ThankYou rating={useRatingState[0]} />
      ) : (
        <UserPrompt
          onSubmission={ratingSubmissionHandler}
          useRatingState={useRatingState}
        />
      )}
    </div>
  );
}

export default App;
