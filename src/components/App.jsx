import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setgoodFeedback] = useState(0);
  const [neutral, setneutralFeedback] = useState(0);
  const [bad, setbadFeedback] = useState(0);

  const btnName = { good, neutral, bad };

  const feedbackCount = type => {
    if (type === 'good') {
      setgoodFeedback(prevState => prevState + 1);
    } else if (type === 'neutral') {
      setneutralFeedback(prevState => prevState + 1);
    } else if (type === 'bad') {
      setbadFeedback(prevState => prevState + 1);
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const totalFeedback = countTotalFeedback();
    return (good * 100) / totalFeedback;
  };

  const noFeedback = countTotalFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(btnName)}
          onLeaveFeedback={feedbackCount}
        />
      </Section>
      {noFeedback ? (
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </>
  );
};
