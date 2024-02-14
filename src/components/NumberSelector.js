import React from 'react';

const NumberSelector = ({ onNumberClick, selectedNumbers }) => {
  // Function to handle clicking on a number button
  const handleClick = (number) => {
    if (selectedNumbers.includes(number)) {
      // If the number is already selected, deselect it
      onNumberClick(number);
    } else {
      // If the number is not selected, select it
      if (selectedNumbers.length < 5) {
        onNumberClick(number);
      } else {
        alert('You can only choose 5 numbers!');
      }
    }
  };

  return (
    <div className="number-selector">
      <h1>Choose 5 numbers:</h1>
      <div className="number-buttons">
        {[...Array(20)].map((_, index) => (
          <button
            key={index + 1}
            className={selectedNumbers.includes(index + 1) ? 'selected' : ''}
            onClick={() => handleClick(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NumberSelector;
