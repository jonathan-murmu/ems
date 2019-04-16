import * as actionTypes from '../actions/actionTypes';

const initialState = {
  orders: null,
  error: false
};

const reducer = ( state=initialState, action ) => {
  switch ( action.type ) {
    case ( actionTypes.SET_ORDERS ):
      return {
        ...state, 
        orders: action.orders,
        error: false
      };
    case ( actionTypes.SET_ORDERS_FAILED ):
      return {
        ...state,
        error: true
      }
    default:
      return state;
  }
};

export default reducer;