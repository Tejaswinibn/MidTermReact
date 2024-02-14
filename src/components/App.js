import React, { useState } from 'react';
import '../css/App.css';
import NumberSelector from './NumberSelector';
import SelectedNumbersDisplay from './SelectedNumbersDisplay';
import MoneyInput from './MoneyInput';
import ActionButton from './ActionButton';

const App = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [selectedValue, setSelectedValue] = useState(0);

  const handleNumberClick = (number) => {
    if (selectedNumbers.includes(number)) {
      // If the number is already selected, deselect it
      setSelectedNumbers(prevNumbers => prevNumbers.filter(n => n !== number));
    } else {
      // If the number is not selected, select it
      if (selectedNumbers.length < 5) {
        setSelectedNumbers(prevNumbers => [...prevNumbers, number]);
      } else {
        alert('You can only choose 5 numbers!');
      }
    }
  };

  const handleMoneyClick = (value) => {
    if (selectedNumbers.length === 5) {
      setSelectedValue(prevValue => prevValue + value);
    } else {
      alert('Please select 5 numbers first!');
    }
  };

  const handleClear = () => {
    setSelectedNumbers([]);
    setSelectedValue(0);
  };

  const handleRandom = () => {
    const randomNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 20) + 1);
    setSelectedNumbers(randomNumbers);
  };

  
  const handleCash = () => {
    if (selectedNumbers.length === 5) {
      alert(`Numbers Selected: ${selectedNumbers.join(', ')}\nTotal Money Value: $${selectedValue.toFixed(2)}`);
    } else {
      alert('Please select all 5 numbers first!');
    }
  };
  
  return (
    <div>
    <header className="header">
        <h1>WHE WHE Cash Register System</h1>
      </header>
    <div className="container">
      <div className="left-container">
      <br/> <br/>
        <MoneyInput onMoneyClick={handleMoneyClick} selectedValue={selectedValue} />
      </div>
      <div className="main-container">
        <div className="number-selector-container">
          <NumberSelector onNumberClick={handleNumberClick} selectedNumbers={selectedNumbers} /> <br/> <br/>
          <ActionButton onClear={handleClear} onRandom={handleRandom} onCash={handleCash} />
        </div>
      </div>
      <div className="right-container">
        <SelectedNumbersDisplay selectedNumbers={selectedNumbers} selectedValue={selectedValue} />
        <div className="total-display-container"></div>
      </div>
    </div>
    </div>
  );
};

export default App;
