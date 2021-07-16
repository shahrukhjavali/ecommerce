import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaBars } from 'react-icons/fa';

import './nav.css';

function Nav() {

    const state = useSelector(state => state.addtocart)

    const linkClick = () =>{
        let links = document.querySelectorAll('li');
        links.forEach((item) => {
            item.addEventListener('click', () => {
                document.getElementById('check').checked = true;
            })
        })
    }

    return (
        <div className="navbar">
        <div className="nav__container">
            <label className="navbar__menu" for="check">
                <FaBars/>
            </label>
            <input id="check" type="checkbox"/>
            <div className="image__container">
                <Link to="/"><h3 onClick={linkClick()}>Ecommerce</h3></Link>
            </div>
            <div className="nav__content">
                <input type="text" className="text__search"/>
                <div className="nav__links">
                <ul>
                    <li onClick={linkClick()}><span>Sign In</span></li>
                    <li onClick={linkClick()}><span>Account</span></li>
                    <li onClick={linkClick()}>Return & Cancel</li>
                    <li onClick={linkClick()}>
                        <Link to="/checkout"><span><FaShoppingCart/> Cart<span className="count">{state.length}</span></span></Link>
                    </li>
                    <li onClick={linkClick()}>Sign Out</li>
                </ul>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Nav;
