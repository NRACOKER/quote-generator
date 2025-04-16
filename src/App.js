// Import necessary modules from React and local files
import React, { useState } from 'react'; 
import QuoteBox from './components/QuoteBox'; // Component to display quote and new quote button
import quotes from './data/quotes'; // Array of quote objects with text and category
import './App.css';  // App-level styling


function App() {
  // Available quote categories including 'all' to show every quote
  const categories = ["all", "success", "life", "love", "leadership"];

  // State to hold the currently displayed quote
  const [currentQuote, setCurrentQuote] = useState(getRandomQuote("all"));

  // State to track the currently selected category
  const [category, setCategory] = useState("all");

  //  Returns a random quote based on the selected category.
  function getRandomQuote(selectedCategory) {
    const filteredQuotes = selectedCategory === "all"
      ? quotes
      : quotes.filter(q => q.category === selectedCategory);
    const index = Math.floor(Math.random() * filteredQuotes.length);
    return filteredQuotes[index];
  }

  //  Event handler to generate a new random quote from the current category.
  const handleNewQuote = () => {
    setCurrentQuote(getRandomQuote(category));
  };

  //  Event handler for when a new category is selected.
  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    setCurrentQuote(getRandomQuote(newCategory));
  };

  return (
    // Main app container with a dynamic background
    <div className="App" style={{ backgroundColor: randomPastelColor() }}>
      <h1>Quote Generator App</h1>
    
     <select onChange={handleCategoryChange} value={category}>   
        {categories.map(cat => <option key={cat} value={cat}>{cat.toUpperCase()}</option>)}
      </select>

      <QuoteBox quote={currentQuote} onNewQuote={handleNewQuote} />
     
    </div>
    
  );
  
}

// Generates a random pastel color using HSL
function randomPastelColor() {
  const hue = Math.floor(Math.random() * 360);
  return `hsl(${hue}, 70%, 90%)`;
}

// Export the App component as the root component
export default App;
