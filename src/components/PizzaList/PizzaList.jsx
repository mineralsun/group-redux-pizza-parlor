import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import PizzaItem from '../PizzaItem/PizzaItem.jsx';
import { useHistory } from 'react-router-dom';

function PizzaList() {
    // Dispatch function
  const dispatch = useDispatch();
// Getting the pizzas, cart, and total from the index store
  const pizzas = useSelector(store => store.pizzas);
  const cart = useSelector(store => store.cart);
  const total = useSelector(store => {
    return store.cart.reduce((acc, pizza) => acc + pizza.cost * pizza.quantity, 0);
  });
  const history = useHistory();

  // Using useEffect to fetch pizza data from the server when the component is needed 
  useEffect(() => {
    axios.get('/api/pizza')
      .then(response => {
        // dispatching pizza data to index store
        dispatch({ type: 'SET_PIZZAS', payload: response.data });
      })
      .catch(error => {
        console.log('Error fetching pizzas:', error);
      });
  }, [dispatch]);

  // Function for adding a pizza to the cart 
  const handleAddToCart = (pizza) => {
    const index = cart.findIndex(item => item.id === pizza.id);
    if (index === -1) {
      dispatch({ type: 'ADD_TO_CART', payload: { ...pizza, quantity: 1 } });
    } else {
      const newCart = [...cart];
      newCart[index].quantity++;
      // Dispatching an action to update the cart with the new quantity
      dispatch({ type: 'UPDATE_CART', payload: newCart });
    }
  };

  // Function for removing a pizza from the cart 
  const handleRemoveFromCart = (pizza) => {
    const index = cart.findIndex(item => item.id === pizza.id);
    if (index !== -1) {
      const newCart = [...cart];
      if (newCart[index].quantity === 1) {
        newCart.splice(index, 1);
      } else {
        newCart[index].quantity--;
      }
      // Dispatching an action to update the cart with the new quantity
      dispatch({ type: 'UPDATE_CART', payload: newCart });
    }
  };

  const nextPage = () => {
    if (cart.length > 0) {
        history.push('/api/order');
    } else {
        alert('Please add a pizza.');
    }
}

  return (
    <div>
      <h2>Pizza Menu</h2>
      <ul>
        {pizzas.map(pizza => (
          <PizzaItem
            key={pizza.id}
            pizza={pizza}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            total={total}
          />
        ))}
      </ul>
      <p>Cart total: ${total.toFixed(2)}</p>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}

export default PizzaList;




