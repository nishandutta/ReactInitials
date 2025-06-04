import React, { useState } from 'react';
import './Calculator.css';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [operation, setOperation] = useState('add');

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Please enter valid numbers');
      return;
    }

    let res;
    switch (operation) {
      case 'add':
        res = a + b;
        break;
      case 'sub':
        res = a - b;
        break;
      case 'mul':
        res = a * b;
        break;
      case 'div':
        res = b !== 0 ? a / b : 'Cannot divide by zero';
        break;
      case 'mod':
        res = b !== 0 ? a % b : 'Cannot modulo by zero';
        break;
      default:
        res = 'Unknown operation';
    }

    setResult(res);
  };

  return (
    <div className="calculator">
      <h2>Simple Calculator</h2>
      <input
        type="number"
        placeholder="Number 1"
        value={num1}
        onChange={e => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Number 2"
        value={num2}
        onChange={e => setNum2(e.target.value)}
      />
      <select value={operation} onChange={e => setOperation(e.target.value)}>
        <option value="add">Add (+)</option>
        <option value="sub">Subtract (-)</option>
        <option value="mul">Multiply (×)</option>
        <option value="div">Divide (÷)</option>
        <option value="mod">Modulo (%)</option>
      </select>
      <button onClick={calculate}>Calculate</button>
      {result !== null && <div className="result">Result: {result}</div>}
    </div>
  );
}

export default Calculator;
