import React from 'react';
import Navbar from './components/Navbar.js';
import Home from './components/Page.js';

function App() {
  document.title = "RedSec";
  return (
    <div className="App">
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
