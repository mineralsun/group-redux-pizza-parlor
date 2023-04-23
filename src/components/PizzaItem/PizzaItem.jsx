import React from 'react';

function PizzaItem(props) {
    // making the props individual variables from Pizzalist 
  const { pizza, onAddToCart, onRemoveFromCart, total } = props;

// Render the pizza item with it's name, description, price, and buttons that add/remove from the cart
  return (
    <div>
      <h3>{pizza.name}</h3>
      <p>{pizza.description}</p>
      <p>Price: ${pizza.price}</p>
      <button onClick={() => onAddToCart(pizza)}>Add to cart</button>
      <button onClick={() => onRemoveFromCart(pizza)}>Remove from cart</button>
    </div>
  );
}

export default PizzaItem;

