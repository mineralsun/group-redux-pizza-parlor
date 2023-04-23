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

    return (
        <>
        {
            cart.map(order => (
                <div key={order.id}>
                    <th>ORDER LIST:</th>
                    <tr>Name: {order.customer_name}</tr>
                    <tr>Time Placed: {order.time}</tr>
                    <tr>Type: {order.type}</tr>
                    <tr>Total Cost: {order.total}</tr>
                </div>
            ))
        }
        </>
    )
}

export default Admin;