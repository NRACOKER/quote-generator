import React from 'react';

const QuoteBox = ({ quote, onNewQuote }) => {
  return (
    <div className="quote-box">
      <p className="quote-text">“{quote.text}”</p>
      <p className="quote-author">— {quote.author}</p>
      <button onClick={onNewQuote}>New Quote</button>
    </div>
  );
};

export default QuoteBox;
