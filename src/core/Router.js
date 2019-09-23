import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MarketPage from '../components/MarketPage/MarketPage';
import CartPage from '../components/CartPage/CartPage';
import Login from '../components/Login/Login';

export default function () {
    return (
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/market' component={MarketPage} />
            <Route path='/cart' component={CartPage} />
        </Switch>
    )
}