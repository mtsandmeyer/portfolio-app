import React from 'react';
import './App.css';
import PortfolioPage from './PortfolioPage';
import EmailHeader from './EmailHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EmailHeader/>
        <PortfolioPage/>
      </header>
    </div>
  );
}

export default App;
