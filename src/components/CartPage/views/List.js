import React from 'react';
import Burger from './Burger';
import { NavLink } from 'react-router-dom';
import style from './../../MarketPage/views/style.module.css';

const List = ({ burgers, removeOrderBurger }) => {

    // if there are no burgers, draw a component NothingAdded
    if (burgers.length === 0) {
        return <NothingAdded />
    } else {
        return (
            <div className={style.burgersList}>
                {
                    burgers.map(burger =>
                        <Burger
                            key={burger.id}
                            data={burger}
                            removeOrderBurger={removeOrderBurger}
                        />)
                }
            </div>
        )
    }
}

const NothingAdded = () => {
    return (
        <h3>
            Nothing added to cart. Add some at
            <NavLink to={'/market'}> market</NavLink>
        </h3>
    )
}

export default List;