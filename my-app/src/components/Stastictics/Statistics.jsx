import React from 'react';
import Notification from '../Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total ? (
    <div>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p>

      {positivePercentage > 0 && (
        <div>Positive feedback: {positivePercentage}%</div>
      )}
    </div>
  ) : (
    <Notification message="No feedback given" />
  );
};

export default Statistics;
