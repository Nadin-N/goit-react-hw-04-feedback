import PropTypes from 'prop-types';
import css from './Feedback.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={css.btnlist}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              type="button"
              className={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option.toUpperCase().slice(0, 1) + option.slice(1)}
            </button>
          </li>
        );
      })}
    </ul>
  );
};
Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
