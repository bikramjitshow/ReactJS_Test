import React from 'react';
import './App.css';
import Persons from './components/persons/Persons';

function App() {
  return (
    <div className="App">
      <h1>React APP</h1>
      <div className="cards">
        <Persons name="Bikram" age="23" />
        <Persons name="Rukmini" age="22" />
        <Persons name="Zidh" age="28" />
        <Persons name="jeet" age="29" />
      </div>
    </div>
  );
}

export default App;
