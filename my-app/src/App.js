import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Stastictics';

class App extends Component {
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
  };
  leaveFeedback = event => {
    this.setState(prevState => ({
      [event.target.textContent]: prevState[event.target.textContent] + 1,
    }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const countTotalFeedback = bad + neutral + good;
    const countPositiveFeedbackPercentage = (
      (good / countTotalFeedback) *
      100
    ).toFixed(0);

    const options = Object.keys(this.state);
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.leaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          ></Statistics>
        </Section>
      </>
    );
  }
}

export default App;
