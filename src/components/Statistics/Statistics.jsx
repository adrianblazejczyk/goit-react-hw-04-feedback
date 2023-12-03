import { StyledListItem, StyledList } from './Statistics.styled';
import PropTypes from 'prop-types';

const total = (good, neutral, bad) => good + neutral + bad;
const goodFeedbackPercentage = (good, neutral, bad) =>
  Math.ceil((good / (good + neutral + bad)) * 100);

export const Statistics = ({ good, bad, neutral }) => {
  return (
    <StyledList>
      <ul>
        <StyledListItem>Good: {good}</StyledListItem>
        <StyledListItem>Neutral: {neutral} </StyledListItem>
        <StyledListItem>Bad: {bad}</StyledListItem>
        <StyledListItem>Total: {total(good, neutral, bad)}</StyledListItem>
        <StyledListItem>
          Positive feedback: {goodFeedbackPercentage(good, neutral, bad)}%{' '}
        </StyledListItem>
      </ul>
    </StyledList>
  );
};

Statistics.propTypes = {
  state: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
};
