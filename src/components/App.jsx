import React from 'react';
import { useState } from 'react';
import { Statistics } from './Statistics/Statistics';
import { Feedback } from './Feedback/Feedback';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from './Container/Container.module.css';

export function App() {
  const [options, setOption] = useState({ good: 0, neutral: 0, bad: 0 });

  const onLeaveFeedback = option => {
    setOption(prevState => ({ ...prevState, [option]: prevState[option] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(options).reduce((acc, el) => (acc += el), 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return parseInt((options.good / countTotalFeedback()) * 100);
  };

  const total = countTotalFeedback();

  return (
    <div className={css.container}>
      <Section title="Please leave feedback">
        <Feedback
          options={Object.keys(options)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      {total > 0 ? (
        <Section title="Statistics:">
          <Statistics
            options={options}
            total={total}
            onCountPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
}
