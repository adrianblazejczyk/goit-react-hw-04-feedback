const total = (good, neutral, bad) => good + neutral + bad;
const goodFeedbackPercentage = (good, neutral, bad) =>
  (good / (good + neutral + bad)) * 100;

export const Statistics = ({
  title,
  good,
  neutral,
  bad,
  total,
  goodFeedbackPercentage,
}) => (
  <>
    <h2>{title}</h2>
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {total}</li>
      <li>Positive feedback: {goodFeedbackPercentage}% </li>
    </ul>
  </>
);
