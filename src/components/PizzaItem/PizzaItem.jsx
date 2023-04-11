import React from 'react';

function PizzaItem(props) {
    
const { pizza, onAddToCart, onRemoveFromCart, total } = props 
  return (
    <div>
      <h3>{pizza.name}</h3>
      <p>{pizza.description}</p>
      <p>Price: ${total.toFixed(2)}</p>
      <button onClick={() => onAddToCart(pizza)}>Add to cart</button>
      <button onClick={() => onRemoveFromCart(pizza)}>Remove from cart</button>
    </div>
  );
}


export default PizzaItem;