import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';

import './checkout.css';
import { remove_from_cart, increment, decrement } from '../../actions/actions';
import Subtotal from '../subtotal/subtotal';

function Checkout() {

    let state = useSelector(state => state.addtocart)

    const dispatch = useDispatch() 

    return (
        <div className="checkout__content">
            <div className="subtotal">
                <Subtotal/>
            </div>
        <div className="checkout__container">
            <div className="item__content">
                {
                    state.map((item, index) => (
                        <div key = {index} className="content">
                        <div className="image__container">
                            <img src={item.image} className="item__image"/>
                        </div>
                        <div className="item__details">
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <p>{Array(parseInt(item.rating)).fill(null).map((item) => (
                                 <span className="rating"><FaStar/></span>
                            ))}</p>
                            <p>
                                ${item.price}
                                <p><span>SubTotal :</span><span>${item.price*item.qty}</span></p>
                            </p>
                            <p>
                                <button className="increment" onClick={e => dispatch(increment(item))}>+</button>
                                    <span>{item.qty}</span>
                                <button className="decrement" onClick={e => dispatch(decrement(item))}>-</button>
                            </p>
                            <button className="remove"
                                onClick={e => dispatch(remove_from_cart(item))}>Remove From Cart</button>
                        </div>
                        </div>
                    ))
                }
            </div>
            <div className="subtotal__res">
                <Subtotal/>
            </div>
        </div>
        </div>
    )
}

export default Checkout;
