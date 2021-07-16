import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import './subtotal.css';

function Subtotal() {

    const state = useSelector(state => state.addtocart);

    let [total, setTotal] = useState(0);

    const totalCal = () => {
        let total_local = 0;
        state.forEach(element => {
            total_local += element.price*element.qty;
        });
        setTotal(total_local);
    }

    useEffect(() => {
        totalCal() 
    }, [state])

    return (
        <div className="subtotal__container">
            <h1>Total Price</h1>
            <h5>Total: ${total}</h5>
        </div>
    )
}

export default Subtotal;
