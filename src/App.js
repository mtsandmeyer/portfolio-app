import React from 'react';
import './App.css';
import PortfolioPage from './PortfolioPage';
import EmailHeader from './EmailHeader';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;500;700&display=swap" rel="stylesheet"></link>
        <EmailHeader/>
        <PortfolioPage/>
      </header>
      <footer></footer>
    </div>
  );
}

export default App;
