import React from 'react';
import { useDispatch } from 'react-redux';
import { FaStar } from 'react-icons/fa';

import './product.css';
import { add_to_cart } from '../../actions/actions';

function Product({id, title, image, rating, description, price}) {

    const dispatch = useDispatch();

    return (
        <div className="product__container">
            <div className="card">
                <div className="card__image">
                    <img src={image}/>
                </div>
                <div className="card__content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <p>{Array(parseInt(rating)).fill(null).map((item, ind) => (
                        <span className="rating"><FaStar/></span>
                    ))}</p>
                    <p>${price}</p>
                    <button onClick={e => dispatch(add_to_cart({'id':id,
                        'title':title,'image':image, 'rating':rating,
                        'description':description, 'price':price, 'qty':1
                    }))}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}
export default Product;
