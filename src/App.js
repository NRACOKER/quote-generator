import React, { useState } from 'react';
import QuoteBox from './components/QuoteBox';
import quotes from './data/quotes';
import './App.css';

function App() {
  const categories = ["all", "success", "life", "love", "leadership"];
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote("all"));
  const [category, setCategory] = useState("all");

  function getRandomQuote(selectedCategory) {
    const filteredQuotes = selectedCategory === "all"
      ? quotes
      : quotes.filter(q => q.category === selectedCategory);
    const index = Math.floor(Math.random() * filteredQuotes.length);
    return filteredQuotes[index];
  }

  const handleNewQuote = () => {
    setCurrentQuote(getRandomQuote(category));
  };

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    setCurrentQuote(getRandomQuote(newCategory));
  };

  return (
    <div className="App" style={{ backgroundColor: randomPastelColor() }}>
      <h1>Quote Generator App</h1>

      <select onChange={handleCategoryChange} value={category}>
        {categories.map(cat => <option key={cat} value={cat}>{cat.toUpperCase()}</option>)}
      </select>

      <QuoteBox quote={currentQuote} onNewQuote={handleNewQuote} />
     
    </div>
    
  );
  
}

function randomPastelColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 90%)`;
}

export default App;
