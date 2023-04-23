import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Reducer for pizzas
const pizzas = (state = [], action) => {
    if (action.type === 'SET_PIZZAS') {
        return action.payload;
    }
    return state;
};

// Reducer for the cart 
const cart = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'UPDATE_CART':
            return action.payload;
        case 'REMOVE_FROM_CART':
            const newCart = [...state];
            const index = newCart.findIndex(item => item.id === action.payload.id);
            if (index !== -1) {
                if (newCart[index].quantity === 1) {
                    newCart.splice(index, 1);
                } else {
                    newCart[index].quantity--;
                }
            }
            return newCart;
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
};

// Reducer for the total cost of the iems in the cart
const total = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return state + action.payload.price;
        case 'UPDATE_CART':
        case 'REMOVE_FROM_CART':
            return action.payload.reduce((acc, item) => acc + item.cost * item.quantity, 0);
        case 'CLEAR_CART':
            return 0;
        default:
            return state;
    }
};

// //Items in the cart
// const cart = (state = [], action) => {
//     if (action.type === 'ADD_ORDER') {
//         return [...state, action.payload]
//     }
//     return state;
// };

// Redux store 
const storeInstance = createStore(
    combineReducers({
        cart,
        pizzas,
        total,
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
            <App />
        </Provider>
    </React.StrictMode>
);
