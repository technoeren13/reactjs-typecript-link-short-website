import React, { useState } from 'react';
import './App.css';
import URLShortenerForm from './Compenents/urlShort'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          URL AREA
        </h1>
        <div>
          <URLShortenerForm />
        </div>

      </header>
    </div>
  );
}

export default App;
