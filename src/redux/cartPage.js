const SET_ORDER = 'SET_ORDER';
const REMOVE_ORDER = 'REMOVE_ORDER';

const initialState = {
    burgers: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_ORDER: {
            let isBurger = state.burgers.find(burger => burger.id === action.burger.id)
            return {
                ...state,
                burgers: isBurger ? state.burgers : [action.burger, ...state.burgers]
            }
        }
        case REMOVE_ORDER: {
            return {
                ...state,
                burgers: state.burgers.filter(burger => burger.id !== action.id)
            }
        }
        default: return state;
    }
}

const removeOrderBurgerAction = id => ({ type: REMOVE_ORDER, id });

export const removeOrderBurgerThunkCreator = (id) => (dispatch) => {
    dispatch(removeOrderBurgerAction(id));
}