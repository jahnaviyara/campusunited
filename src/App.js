import logo from './logo.png';
import './App.css';
import React from 'react';
import Navbar from './Components/Navbar.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <div className='tex'>
          <div className='title'>
            <p className='cam'>CAMPUS</p>
            <p className='uni'>UNITED</p>
          </div>
          <img src={logo} className="App-logo" alt="logo"/>
        </div>
      </header>
    </div>
  );
}

export default App;
