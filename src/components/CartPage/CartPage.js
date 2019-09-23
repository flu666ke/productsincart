import React from 'react';
import style from './style.module.css';
import HeaderCart from '../HeaderCart/HeaderCart';
import { connect } from 'react-redux';
import { removeOrderBurgerThunkCreator } from '../../redux/cartPage';
import List from './views/List';

const CartPage = ({ removeOrderBurger, burgers }) => {

  return (
    <div className={style.cartPage}>
      <HeaderCart />
      <h1>CartPage</h1>
      <div>
        <List burgers={burgers} removeOrderBurger={removeOrderBurger} />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  burgers: state.cartPage.burgers
});

const mapDispatchToProps = {
  removeOrderBurger: removeOrderBurgerThunkCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);


