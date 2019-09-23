import React from 'react';
import style from './style.module.css';
import { connect } from 'react-redux';
import List from './views/List';
import { BurgersThunkCreator, OrderBurgerThunkCreator } from '../../redux/marketPage';
import { burgers } from '../../mock';
import HeaderCart from '../HeaderCart/HeaderCart';

const MarketPage = ({ setBurgers, burgs, setOrderBurger }) => {

  // take our burgers from mock
  setBurgers(burgers)

  return (
    <div className={style.burgers}>
      <HeaderCart />
      <h1>MarketPage</h1>
      <div>
        <List burgs={burgs} setOrderBurger={setOrderBurger} />
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  burgs: state.marketPage.burgers
});

const mapDispatchToProps = {
  setBurgers: BurgersThunkCreator,
  setOrderBurger: OrderBurgerThunkCreator,
};

export default connect(mapStateToProps, mapDispatchToProps)(MarketPage);











