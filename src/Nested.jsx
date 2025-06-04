import React from 'react';
import './Nested.css';

function Nested() {
  return React.createElement(
    'div',
    { className: 'outer' },
    React.createElement(
      'div',
      { className: 'inner' },
      React.createElement('h1', { id: 'inner-heading' }, 'This is an H1 inside the inner div')
    ),
    React.createElement('h2', { className: 'heading2' }, 'This is an H2 outside the inner div')
  );
}

export default Nested;
