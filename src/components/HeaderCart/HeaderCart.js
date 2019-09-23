import React from 'react';
import style from './style.module.css';
import { NavLink } from 'react-router-dom';

const HeaderCart = () => {
    return (
        <div className={style.cart}>
            <NavLink to='/cart'>
                Go to Cart
            </NavLink>
            {/* <div>
                count
            </div> */}
        </div>
    )
}

export default HeaderCart;