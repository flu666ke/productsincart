import React from 'react';
import style from './../../MarketPage/views/style.module.css';

const Burger = ({ data: { id, pic, name }, removeOrderBurger }) => {

    // remove our burgers from the cart
    const remove = () => {
        removeOrderBurger(id);
    }

    return (
        <div className={style.burger}>
            <h2>{name}</h2>
            <img src={pic} alt={'some pic'} />
            <button onClick={remove}>Remove</button>
        </div>
    );
}

export default Burger;