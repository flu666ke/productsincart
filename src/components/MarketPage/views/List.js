import React from 'react';
import Burger from './Burger';
import style from './style.module.css';

const List = ({ burgs, setOrderBurger }) => {

    return (
        <div  className={style.burgersList}>
            {
                burgs.map(burger => <Burger
                    key={burger.id}
                    burg={burger}
                    setOrderBurger={setOrderBurger}
                />)
            }
        </div>
    )
}

export default List;