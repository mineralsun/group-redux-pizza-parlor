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
        axios.get('/api/orders').then((response) => {
            dispatch({ type: 'ADD_ORDER', payload: response.data});
        }).catch((error) => {
            console.log(`Error in GET: ${error}`);
            alert('Something went wrong!')
        });
    }

    return (
        <>
        
        </>
    )
}

export default Admin;