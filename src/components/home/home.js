import React from 'react'
import Product from '../product/product';

import './home.css';
import { products } from '../../data_product';

function Home() {
    return (
        <div className="home__container">
            <div className="grid__content">
                {
                    products.map((item, ind) => (
                        <div className="grid__item1">
                            <Product
                                id={item.id} 
                                title={item.title}
                                image={item.image}
                                rating={item.ratings}
                                description={item.description}
                                price={item.price}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Home;
