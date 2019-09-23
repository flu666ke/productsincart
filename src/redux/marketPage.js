const SET_BURGERS = 'SET_BURGERS';
const SET_ORDER = 'SET_ORDER';

const initialState = {
    burgers: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_BURGERS: {
            return {
                ...state,
                burgers: action.burgers
            }
        }
        default: return state;
    }
}

const BurgersAction = burgers => ({ type: SET_BURGERS, burgers });

const OrderBurgerAction = burger => ({type: SET_ORDER, burger});

export const BurgersThunkCreator = (burgers) => (dispatch) => {
    dispatch(BurgersAction(burgers));
}

export const OrderBurgerThunkCreator = (burger) => (dispatch) => {
    dispatch(OrderBurgerAction(burger));
}