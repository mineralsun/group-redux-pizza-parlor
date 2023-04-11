import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PizzaItem from '../PizzaItem/PizzaItem.jsx';

function PizzaList() {
    // Define state variables for pizzas, cart, and total
    const [pizzas, setPizzas] = useState([]);
    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    // Define a function to fetch pizzas from the server
    const fetchPizzas = () => {
        axios.get('/api/pizza')
            .then(response => {
                setPizzas(response.data);
                const newTotal = cart.reduce((acc, pizza) => acc + pizza.cost * pizza.quantity, 0);
                setTotal(newTotal);
            })
            .catch(error => {
                console.log('Error fetching pizzas:', error);
            });
    };

    // Use the fetchPizzas function in a useEffect hook that runs when the cart changes
    useEffect(() => {
        fetchPizzas();
    }, [cart]);

    // Define a function to add an item to the cart
    const handleAddToCart = (pizza) => {
        const index = cart.findIndex(item => item.id === pizza.id);
        if (index === -1) {
            const newCart = [...cart, { ...pizza, quantity: 1 }];
            setCart(newCart);
        } else {
            const newCart = [...cart];
            newCart[index].quantity++;
            setCart(newCart);
        }
    };

    // Define a function to remove an item from the cart
    const handleRemoveFromCart = (pizza) => {
        const index = cart.findIndex(item => item.id === pizza.id);
        if (index !== -1) {
            const newCart = [...cart];
            if (newCart[index].quantity === 1) {
                newCart.splice(index, 1);
            } else {
                newCart[index].quantity--;
            }
            setCart(newCart);
        }
    };

    // Render the list of pizzas and the cart total
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
            <button>Next</button>
        </div>
    );
};

export default PizzaList;

