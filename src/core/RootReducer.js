import { combineReducers } from 'redux';
import marketPage from '../redux/marketPage';
import cartPage from '../redux/cartPage';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({
    marketPage,
    cartPage,
    form: formReducer,
})



