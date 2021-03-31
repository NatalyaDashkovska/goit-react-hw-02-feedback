import React from 'react';

const Statistic = ({ stateGood, stateNeutral, stateBad }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <p>Good {stateGood}</p>
      <p>Neutral {stateNeutral}</p>
      <p>Bad {stateBad}</p>
    </div>
  );
};

export default Statistic;
