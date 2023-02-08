import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({
  good,
  neutral,
  total,
  bad,
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
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  onCountPositiveFeedbackPercentage: PropTypes.func.isRequired,
};
export default Statistics;
