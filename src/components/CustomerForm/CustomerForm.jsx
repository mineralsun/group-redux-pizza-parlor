import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';


function CustomerForm ({}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const customer_name = useSelector(store => store.customer_name);
    const street_address = useSelector(store => store.street_address);
    const city = useSelector(store => store.city);
    const zip = useSelector(store => store.zip);
    const type = useSelector(store => store.type);
    const total = useSelector(store => store.total);
    const pizzas = useSelector(store => store.pizzas);

    // const [customer_name, setCustomerName] = useState('');
    // const [street_address, setStreetAddress] = useState('');
    // const [city, setCustomerCity] = useState('');
    // const [zip, setCustomerZip] = useState('');
    // const [type, setCustomerType] = useState('');
    // const [total, setCustomerTotal] = useState(25.99);
    // const [pizzas, setCustomerPizza] = useState({id: 0, quantity: 0});

    const handleCustomerName = (e) => {
        const action = { type: 'SET_CUSTOMER_NAME', payload: e.target.value};
        dispatch(action);
    }

    const handleStreetAddress = (e) => {
        const action = { type: 'SET_STREET_ADDRESS', payload: e.target.value};
        dispatch(action);
    }

    const handleCity = (e) => {
        const action = { type: 'SET_CITY', payload: e.target.value};
        dispatch(action);
    }

    const handleZip = (e) => {
        const action = { type: 'SET_ZIP', payload: e.target.value};
        dispatch(action);
    }
    
    const handleType = (e) => {
        const action = { type: 'SET_TYPE', payload: e.target.value};
        dispatch(action);
    }

    // const submitForm = (e) => {
    //     e.preventDefault();
    //     let order = {
            // customer_name: customer_name,
            // street_address: street_address,
            // city: city,
            // zip: zip,
            // type: type,
            // total: total,
            //! STORE VALUES FROM REDUX PIZZALIST IN THIS NEXT OBJECT
            // pizzas: [{ quantity: 1}]
    // }
    //     axios.post('/api/order', order).then((response) => (
    //         console.log(response)
    //     ))
    //     .catch((error) => {
    //         console.log(`Error in POST ${error}`);
    //         alert('Something went wrong');
    //     })
    // }

    const proceedToCheckout = (event) => {
        event.preventDefault();
        if (customer_name.length < 0) {
            alert('Please enter name');
        } else if (street_address.length < 0) {
            alert('Please enter address');
        } else if (city.length < 0) {
            alert('Please enter a city!');
        } else if (zip.length < 0 ) {
            alert('Please enter a ZIP code!');
        } else if (type !== 'Pickup' && type !== 'Delivery') {
            alert('Please select Pickup or Delivery');
        } else {
            history.push('/checkout');
        }
    }

    return (
        <>
            <form onSubmit={proceedToCheckout}>
                <input type="text"
                       value={customer_name}
                       placeholder="Name"
                       onChange={handleCustomerName} />
                <br />
                <input type="text"
                       value={street_address}
                       placeholder="Street Address"
                       onChange={handleStreetAddress} />
                <br />
                <input type="text"
                       value={city}
                       placeholder="City"
                       onChange={handleCity} />
                <br />
                <input type="text"
                       value={zip}
                       placeholder="ZIP Code"
                       onChange={handleZip} />
                <br />
                <input type="radio"
                       name="type"
                       onChange={handleType}
                       value="Pickup" /> Pickup
                <span />
                <input type="radio"
                       name="type"
                       onChange={handleType}
                       value="Delivery" /> Delivery
                <br />
                <input type="submit" />
            </form>
        </>
    )
}

export default CustomerForm;

    // let [customerInfo, setCustomerInfo] = useState({
    //     customer_name: '',
    //     street_address: '',
    //         city: '',
    //         zip: '',
    //         type: '',
    //         total: 0,
    //         pizzas: [{
    //             id: '',
    //             quantity: 0
    //           },{
    //             id: '',
    //             quantity: 0
    //           }]
    // });

    // const handleCustomerInfo= (event) => {
    //     setCustomerInfo({
    //         ...customerInfo,
    //         customer_name: customer_name,
    //         street_address: street_address,
    //         city: city,
    //         zip: zip,
    //         type: type,
    //         total: 0,
    //         pizzas: [{
    //             id: '',
    //             quantity: 0
    //           },{
    //             id: '',
    //             quantity: 0
    //         }]
    //     });
    // }