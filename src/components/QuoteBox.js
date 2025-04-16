// Import React to define the functional component
import React from 'react';

/**
 * QuoteBox Component
 * Displays a quote with its author and a button to generate a new quote.
 * Props:
 *  - quote: an object containing 'text' and 'author'
 *  - onNewQuote: function to call when the "New Quote" button is clicked
 */

const QuoteBox = ({ quote, onNewQuote }) => {
  return (
    <div className="quote-box">
      <p className="quote-text">“{quote.text}”</p>
      <p className="quote-author">— {quote.author}</p>
      <button onClick={onNewQuote}>New Quote</button>
    </div>
  );
};

// Export the QuoteBox component for use in other parts of the app
export default QuoteBox;
