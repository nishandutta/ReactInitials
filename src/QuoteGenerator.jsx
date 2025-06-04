import React, { useState } from 'react';
import './QuoteGenerator.css';

const quotes = [
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { text: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" }
];

function QuoteGenerator() {
  const [quote, setQuote] = useState(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="quote-box">
      <h2>Random Quote</h2>
      <p className="quote-text">"{quote.text}"</p>
      <p className="quote-author">- {quote.author}</p>
      <button onClick={generateQuote}>New Quote</button>
    </div>
  );
}

export default QuoteGenerator;
