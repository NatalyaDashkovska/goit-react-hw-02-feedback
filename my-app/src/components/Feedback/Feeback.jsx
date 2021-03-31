import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedbackForm from './FeedbackForm/FeedbackForm';
import Statistic from './Stastictic/Statistic';
class Feedback extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    initialValue: PropTypes.number,
  };
  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
    total: this.props.initialValue,
    percentage: this.props.initialValue,
  };
  handleIncrementGood = () => {
    this.setState(prevState => ({ good: prevState.good + 1 }));
  };
  handleIncrementNeutral = () => {
    this.setState(prevState => ({ neutral: prevState.neutral + 1 }));
  };
  handleIncrementBad = () => {
    this.setState(prevState => ({ bad: prevState.bad + 1 }));
  };

  render() {
    const countTotalFeedback =
      this.state.bad + this.state.neutral + this.state.good;
    const countPositiveFeedbackPercentage = (
      (this.state.good / countTotalFeedback) *
      100
    ).toFixed(2);
    return (
      <div className="aaa">
        <FeedbackForm
          handleIncrementGood={this.handleIncrementGood}
          handleIncrementNeutral={this.handleIncrementNeutral}
          handleIncrementBad={this.handleIncrementBad}
        />
        <Statistic
          stateGood={this.state.good}
          stateNeutral={this.state.neutral}
          stateBad={this.state.bad}
        />
        {countTotalFeedback > 0 ? (
          <div>Total: {countTotalFeedback}</div>
        ) : (
          <div>No feedback given</div>
        )}

        {countPositiveFeedbackPercentage > 0 && (
          <div>Positive feedback: {countPositiveFeedbackPercentage}%</div>
        )}
      </div>
    );
  }
}

export default Feedback;
