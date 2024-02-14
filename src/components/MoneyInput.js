// MoneyButton.js
import React from 'react';
import moneyimage from '../images/moenyimage.jpeg'
const MoneyButton = ({ onMoneyClick, selectedValue }) => {
  const moneyValues = [1, 5, 10, 20];

  return (
    <div className="money-input-button">
      <img src={moneyimage} alt="Money" />
      {moneyValues.map((value) => (
        <button
          key={value}
          className={value === selectedValue ? 'selected' : ''}
          onClick={() => onMoneyClick(value)}
        >
          ${value.toFixed(2)}
        </button>
      ))}
    </div>
  );
};

export default MoneyButton;
