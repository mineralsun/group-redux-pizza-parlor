import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

//Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//Items in the cart
const cart = (state = [], action) => {
    if (action.type === 'SET_ORDER') {
        return action.payload;
    }
    return state;
};

const customer_name = (state = '', action) => {
    if (action.type === 'SET_CUSTOMER_NAME') {
        return (action.payload);
    }
    return state;
}

const street_address = (state = '', action) => {
    if (action.type === 'SET_STREET_ADDRESS') {
        return (action.payload);
    }
    return state;
}

const city = (state = '', action) => {
    if (action.type === 'SET_CITY') {
        return (action.payload);
    }
    return state;
}

const zip = (state = '', action) => {
    if (action.type === 'SET_ZIP') {
        return (action.payload);
    }
    return state;
}

const type = (state = 'Pickup' || 'Delivery', action) => {
    if (action.type === 'SET_TYPE') {
        return (action.payload);
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        cart,
        customer_name,
        street_address,
        city,
        zip,
        type,
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
