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
      <li className="good-value">
        Good: <span>{good}</span>
      </li>
      <li className="neutral-value">
        Neutral: <span>{neutral}</span>
      </li>
      <li className="bad-value">
        Bad: <span>{bad}</span>
      </li>
      <li className="total-value">
        Total: <span>{total}</span>
      </li>
      <li className="percentage-value">
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
