import styled from 'styled-components';

const StyledListItem = styled.li`
  color: gray;
  list-style-type: none;
`;

const total = (good, neutral, bad) => good + neutral + bad;
const goodFeedbackPercentage = (good, neutral, bad) =>
  (good / (good + neutral + bad)) * 100;

export const Statistics = ({ title, good, neutral, bad }) => (
  <>
    <h2>{title}</h2>
    <ul>
      <StyledListItem>Good: {good}</StyledListItem>
      <StyledListItem>Neutral: {neutral} </StyledListItem>
      <StyledListItem>Bad: {bad}</StyledListItem>
      <StyledListItem>Total: {total(good, neutral, bad)}</StyledListItem>
      <StyledListItem>
        Positive feedback: {goodFeedbackPercentage(good, neutral, bad)}%{' '}
      </StyledListItem>
    </ul>
  </>
);
