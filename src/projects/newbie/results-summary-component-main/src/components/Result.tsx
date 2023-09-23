function Result() {
  return (
    <div className="result-container">
      <div className="result">
        <h3>Your Result</h3>
        <div className="score-container">
          <div className="score">
            <span className="total">76</span>
            <span>of 100</span>
          </div>
        </div>
        <div className="feedback">
          <h2>Great</h2>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Result;
