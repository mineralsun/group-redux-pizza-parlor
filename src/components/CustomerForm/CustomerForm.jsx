import axios from 'axios';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';


function CustomerForm ({}) {
    const history = useHistory();
    const dispatch = useDispatch();

    const customerName = useSelector(store => store.customer_name);
    const streetAddress = useSelector(store => store.street_address);
    const city = useSelector(store => store.city);
    const zip = useSelector(store => store.zip);
    const type = useSelector(store => store.type);
    const Total = useSelector(store => store.total);
    const Pizzas = useSelector(store => store.pizzas);

    // const [customer_name, setCustomerName] = useState('');
    // const [street_address, setStreetAddress] = useState('');
    // const [city, setCustomerCity] = useState('');
    // const [zip, setCustomerZip] = useState('');
    // const [type, setCustomerType] = useState('');
    // const [total, setCustomerTotal] = useState(25.99);
    // const [pizzas, setCustomerPizza] = useState({id: 0, quantity: 0});

    const handleCustomerName = (e) => {
        const action = { type: 'SET_CUSTOMER_NAME', action: e.target.value};
        dispatch(action);
    }

    const handleStreetAddress = (e) => {
        const action = { type: 'SET_STREET_ADDRESS', action: e.target.value};
        dispatch(action);
    }

    const handleCity = (e) => {
        const action = { type: 'SET_CITY', action: e.target.value};
        dispatch(action);
    }

    const handleZip = (e) => {
        const action = { type: 'SET_ZIP', action: e.target.value};
        dispatch(action);
    }
    
    const handleType = (e) => {
        const action = { type: 'SET_TYPE', action: e.target.value};
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
    //         // TODO fetch call
    //     ))
    //     .catch((error) => {
    //         console.log(`Error in POST ${error}`);
    //         alert('Something went wrong');
    //     })
    // }

    const proceedToCheckout = () => {
        if (customerName.length < 0) {
            alert('Please enter name');
        } else if (streetAddress.length < 0) {
            alert('Please enter address');
        } else if (city.length < 0) {
            alert('Please enter a city!');
        } else if (zip.length < 0 ) {
            alert('Please enter a ZIP code!');
        } else if ('Pickup' || 'Delievery' === type) {
            alert('Please select Pickup or Delivery');
        } else {
            history.push('/checkout');
        }
    }

    return (
        <>
            <form onSubmit={proceedToCheckout}>
                <input type="text"
                       value={customerName}
                       placeholder="Name"
                       onChange={handleCustomerName} />
                <br />
                <input type="text"
                       value={streetAddress}
                       placeholder="Street Address"
                       onChange={handleStreetAddress} />
                <br />
                <input type="text"
                       value={city}
                       placeholder="City"
                       onChange={handleCity} />
                <br />
                <input type="number"
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