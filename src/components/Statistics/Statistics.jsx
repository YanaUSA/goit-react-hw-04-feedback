import PropTypes from 'prop-types';
import { StatListItem } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <StatListItem>Good: {good}</StatListItem>
      <StatListItem>Neutral: {neutral}</StatListItem>
      <StatListItem>Bad: {bad}</StatListItem>

      <StatListItem>Total: {total}</StatListItem>
      <StatListItem>
        Positive feedback:{' '}
        {positivePercentage ? Math.round(positivePercentage) : 0} %{' '}
      </StatListItem>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
