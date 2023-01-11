import PropTypes from 'prop-types';
import { FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map(option => (
    <FeedbackBtn
      key={option}
      type="button"
      onClick={() => onLeaveFeedback(option)}
    >
      {option}
    </FeedbackBtn>
  ));
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
