import React from 'react';

const SelectedNumbersDisplay = ({ selectedNumbers, selectedValue }) => {
  const displayValue = `Total Money Value: $${selectedValue.toFixed(2)}`;
  const selectedNumbersText = selectedNumbers.join(', ');

  return (
    <div className="selected-numbers-display">
      <h3>Selected Numbers:</h3>
      <div className="selected-numbers">
        {selectedNumbersText}
        <br/> <br/> <br/>
      </div>
      <input
        type="text"
        value={displayValue}
        readOnly
        className="total-money-value-input"
        placeholder="Total Money Value"
      />
    </div>
  );
};

export default SelectedNumbersDisplay;
