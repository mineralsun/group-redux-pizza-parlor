import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Checkout() {
    const dispatch = useDispatch();
    const history = useHistory();

    const cart = useSelector(store => store.cart);
    const customer_name = useSelector(store => store.customer_name);
    const street_address = useSelector(store => store.street_address);
    const city = useSelector(store => store.city);
    const zip = useSelector(store => store.zip);
    const type = useSelector(store => store.type);
    const order = useSelector(store => store.order);
    const pizzas = useSelector(store => store.pizzas);
    const total = useSelector(store => {
        return store.cart.reduce((acc, pizza) => acc + pizza.price * pizza.quantity, 0);
      });
    
    const handleCheckout = () => {
        axios.post('/api/order', {
            pizzas: cart,
            customer_name: customer_name,
            street_address: street_address,
            city: city,
            zip: zip,
            type: type,
            total: total
        }).then((response) => {
            dispatch({type: 'CLEAR_CART'})
            history.push('/')
        })
    }


    return (
        <>
            <h3>Customer Order:</h3>
            <hr />
            <div>{customer_name}</div>
            <div>{street_address}</div>
            <div>{city}</div>
            <div>{zip}</div>
            <hr />
            <div>
                {
                    cart.map(item => (
                        <div key={item.id}>
                            {item.name}
                            {item.quantity}
                        </div>
                    ))
                }

            </div>
            <hr />
            <div>{total}</div>
            <hr />
            <button onClick={handleCheckout}>Checkout</button>
        </>
    )
}

export default Checkout;