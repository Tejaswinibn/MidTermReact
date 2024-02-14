// ActionButtons.js
import React from 'react';

const ActionButtons = ({ onClear, onRandom, onCash}) => {
  return (
    <div className="action-buttons-container">
      <button className="action-button" onClick={onClear}>Clear</button>
      <button className="action-button" onClick={onRandom}>Random</button>
      <button className="action-button" onClick={onCash}>Cash</button>
    </div>
  );
};

export default ActionButtons;
