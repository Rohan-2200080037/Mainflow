import React, { useState, useEffect, useCallback } from 'react';
import Button from './Button';
import Display from './Display';
import './Calculator.css';
import { evaluate } from 'mathjs';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [memory, setMemory] = useState(null);
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  const handleButtonClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      setInput('');
    } else if (value === 'CE') {
      setInput(input.slice(0, -1));
    } else if (value === 'MC') {
      setMemory(null);
    } else if (value === 'MR') {
      if (memory !== null) setInput(memory);
    } else if (value === 'MS') {
      setMemory(input);
    } else if (value === '√') {
      setInput(Math.sqrt(parseFloat(input)).toString());
    } else if (value === 'x²') {
      setInput(Math.pow(parseFloat(input), 2).toString());
    } else if (value === '1/x') {
      setInput((1 / parseFloat(input)).toString());
    } else if (value === '%') {
      setInput((parseFloat(input) / 100).toString());
    } else if (value === 'His') {
      setShowHistory(!showHistory);
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = useCallback(() => {
    try {
      const result = evaluate(input).toString();
      setInput(result);
      setHistory((prevHistory) => [...prevHistory, { expression: input, result }]);
    } catch (error) {
      setInput('Error');
    }
  }, [input]);

  const clearHistory = () => {
    setHistory([]);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      const { key } = event;
      if ((/[0-9]/).test(key) || ['+', '-', '*', '/', '.'].includes(key)) {
        setInput((prevInput) => prevInput + key);
      } else if (key === 'Enter') {
        calculateResult();
      } else if (key === 'Backspace') {
        setInput((prevInput) => prevInput.slice(0, -1));
      } else if (key === 'Escape') {
        setInput('');
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [calculateResult]);

  return (
    <div className="calculator">
      <Display input={input} />
      <div className="buttons">
        {['C', 'CE', 'MC', 'MR', 'MS', '√', 'x²', '1/x'].map((value) => (
          <Button key={value} value={value} onClick={handleButtonClick} />
        ))}
        {['7', '8', '9', '/'].map((value) => (
          <Button key={value} value={value} onClick={handleButtonClick} />
        ))}
        {['4', '5', '6', '*'].map((value) => (
          <Button key={value} value={value} onClick={handleButtonClick} />
        ))}
        {['1', '2', '3', '-'].map((value) => (
          <Button key={value} value={value} onClick={handleButtonClick} />
        ))}
        {['0', '.', '=', '+'].map((value) => (
          <Button key={value} value={value} onClick={handleButtonClick} />
        ))}
        {['%', 'His'].map((value) => (
          <Button key={value} value={value} onClick={handleButtonClick} />
        ))}
      </div>
      {showHistory && (
        <div className="history">
          <h2>History</h2>
          <ul>
            {history.map((item, index) => (
              <li key={index}>{item.expression} = {item.result}</li>
            ))}
          </ul>
          <Button value="Clear History" onClick={() => clearHistory()} />
        </div>
      )}
    </div>
  );
};

export default Calculator;
