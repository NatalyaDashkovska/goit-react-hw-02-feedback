import React from 'react';
import Notification from '../Notification';
import PropTypes from 'prop-types';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return total ? (
    <div>
      <p>😀 Good {good}</p>
      <p>😐 Neutral {neutral}</p>
      <p>🙁 Bad {bad}</p>
      {total > 0 && <p>👥 Total: {total}</p>}
      {positivePercentage > 0 && (
        <div>👍 Positive feedback: {positivePercentage}%</div>
      )}
    </div>
  ) : (
    <Notification message="No feedback given" />
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};

export default Statistics;
