import React from 'react';
const FeedbackForm = ({
  handleIncrementGood,
  handleIncrementNeutral,
  handleIncrementBad,
}) => {
  return (
    <div>
      <h1>Please leave feedback</h1>
      <button type="button" onClick={handleIncrementGood}>
        Good
      </button>
      <button type="button" onClick={handleIncrementNeutral}>
        Neutral
      </button>
      <button type="button" onClick={handleIncrementBad}>
        Bad
      </button>
    </div>
  );
};
export default FeedbackForm;
