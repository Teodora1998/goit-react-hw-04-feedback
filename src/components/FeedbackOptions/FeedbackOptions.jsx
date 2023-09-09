import { useState } from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback, id }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleClick = option => {
    setSelectedOption(option);
    onLeaveFeedback(option);
  };
  return (
    <div className={css.options}>
      {options.map((option, index) => {
        const optionStyle = {
          backgroundColor:
            selectedOption === option
              ? option === 'bad'
                ? '#a82234'
                : option === 'neutral'
                ? '#613105'
                : option === 'good'
                ? '#32a852'
                : 'transparent'
              : 'transparent',
          color: selectedOption === option ? 'white' : 'black',
        };
        return (
          <button
            key={index}
            onClick={() => handleClick(option)}
            style={optionStyle}>
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        );
      })}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.oneOf(['good', 'neutral', 'bad'])).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
