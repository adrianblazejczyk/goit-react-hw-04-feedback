import { useState } from 'react';
import { WraperApp } from './App.styled';
import {
  Section,
  FeedbackOptions,
  Statistics,
  Notification,
} from '../components';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateFeedback = evt => {
    const keyName = evt.currentTarget.textContent.toLowerCase();

    switch (keyName) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };

  return (
    <WraperApp>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          callback={updateFeedback}
        ></FeedbackOptions>
      </Section>
      <Section title={'Statistics'}>
        {good + neutral + bad ? (
          <Statistics good={good} bad={bad} neutral={neutral}>
            {' '}
          </Statistics>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </WraperApp>
  );
};
