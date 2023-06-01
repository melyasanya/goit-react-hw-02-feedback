import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <li style={{ display: 'flex', flexDirection: 'row', gap: '8px' }}>
      {options.map((el, i) => {
        return (
          <button
            key={el}
            name={el}
            onClick={() => {
              onLeaveFeedback(el);
            }}
          >
            {el.charAt(0).toUpperCase() + el.slice(1)}
          </button>
        );
      })}
    </li>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
};
