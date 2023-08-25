import { FeedbackOptions, Statistics } from '../components';
const state = {
  good: 0,
  neutral: 0,
  bad: 0,
};
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <FeedbackOptions title="Statistics"> </FeedbackOptions>

      <Statistics
        title="Statistics"
        good={50}
        neutral={40}
        bad={10}
      ></Statistics>

      {/* <Statistics></Statistics> */}

      {/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics>
      <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */}
    </div>
  );
};
