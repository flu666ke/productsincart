import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './style.module.css';

const Burger = ({ burg, burg: { name, pic }, setOrderBurger }) => {

  let [text, setText] = useState('Add to cart')

  // add our hamburgers to the cart
  const addOrder = () => {
    setOrderBurger(burg);
    setText(text = <NavLink to={'/cart'}>Go to cart</NavLink>)
  }

  return (
    <div className={style.burger}>
      <h2>{name}</h2>
      <img src={pic} alt={'some pic'} />
      <button onClick={addOrder}>{text}</button>
    </div>
  );
}

export default Burger;