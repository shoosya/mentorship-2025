import React, { useEffect } from 'react';
import './App.css';
import ImageComponent from './components/ImageComponent';
import TextComponent from './components/TextComponent';

function App() {
  return (
    <div className="App">
      <div className="container">
        <TextComponent />
        <ImageComponent />
      </div>
    </div>
  );
}

export default App;