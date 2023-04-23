import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import PizzaList from '../PizzaList/PizzaList.jsx';
import CustomerForm from '../CustomerForm/CustomerForm.jsx';

function App() {

  return (

    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <Router>
        <div>
          <ul className="nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/api/pizza">Pizza List!</Link>
            </li>
            <li>
              <Link to="/api/order">Order Form</Link>
            </li>
            <li>
              <Link to="/checkout">Checkout</Link>
            </li>
          </ul>
          <Route exact path="/">
            <img src='images/pizza_photo.png' />
            <p>Pizza is great.</p>
          </Route>
          <Route exact path="/api/pizza">
            <PizzaList />
          </Route>
          <Route exact path="/api/order">
            <CustomerForm />
          </Route>
          <Route exact path="/checkout">
            {/* <Checkout /> */}
          </Route>
          <Route exact path="/admin">
            {/* <Admin /> */}
          </Route>
        </div>
      </Router>
    </div>

  );
}

export default App;
