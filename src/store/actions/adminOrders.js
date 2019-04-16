import * as actionTypes from './actionTypes';


export const getOrders = () => {
    return {
      type: actionTypes.INITIATE_GET_ORDERS
    }
  };

export const setOrders = ( orders ) => {
  return {
    type: actionTypes.SET_ORDERS,
    orders: orders
  };
};

export const setOrdersFailed = () => {
  return {
    type: actionTypes.SET_ORDERS_FAILED
  }
}
