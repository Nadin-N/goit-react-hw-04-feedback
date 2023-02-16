import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  options: { good, neutral, bad },
  total,
  onCountPositiveFeedbackPercentage,
}) => {
  return (
    <ul className={css.statlist}>
      <li>
        Good: <span>{good}</span>
      </li>
      <li>
        Neutral: <span>{neutral}</span>
      </li>
      <li>
        Bad: <span>{bad}</span>
      </li>
      <li>
        Total: <span>{total}</span>
      </li>
      <li>
        Positive Feedback:
        <span>{onCountPositiveFeedbackPercentage() || '0'}%</span>
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  options: PropTypes.shape({
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,
  total: PropTypes.number.isRequired,
  onCountPositiveFeedbackPercentage: PropTypes.func.isRequired,
};
