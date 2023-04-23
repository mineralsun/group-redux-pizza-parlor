import axios from 'axios'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Admin() {
    const dispatch = useDispatch();
    const history = useHistory();
    const cart = useSelector(store => store.cart);

    useEffect(() => {
        fetchPizzaOrder();
    }, []);

    const fetchPizzaOrder = () => {
        axios.get('/api/order').then((response) => {
            dispatch({ type: 'SET_ORDER', payload: response.data});
        }).catch((error) => {
            console.log(`Error in GET: ${error}`);
            alert('Something went wrong!')
        });
    }

    const convert = (oldTime) => {
        const date = new Date(oldTime).toLocaleDateString('en-EN')
        const time = new Date(oldTime).toLocaleTimeString('en-EN')
        return `${date} @ ${time}`;
    }

    return (
        <>
        <h1>ORDERS:</h1>
        {
            cart.map(order => (
                <div key={order.id}>
                    <hr />
                    <h3>Order {order.id}</h3>
                    <tc>Name: {order.customer_name}</tc>
                    <br />
                    <tc>Time Placed: {convert(order.time)}</tc>
                    <br />
                    <tc>Type: {order.type}</tc>
                    <br />
                    <tc>Total Cost: {order.total}</tc>
                    <hr />
                </div>
            ))
        }
        </>
    )
}

export default Admin;