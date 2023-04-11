import React from 'react';
import axios from 'axios';
import './App.css';
import PizzaList from '../PizzaList/PizzaList.jsx';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <PizzaList />
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
    </div>
  );
}

export default App;
