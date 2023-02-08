import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import css from './Container/Container.module.css';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => (acc += el), 0);
  };

  countPositiveFeedbackPercentage = () => {
    return parseInt((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <Feedback
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        {total > 0 ? (
          <Section title="Statistics:">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              onCountPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          </Section>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
