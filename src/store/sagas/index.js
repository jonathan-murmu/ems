import { takeEvery } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { getOrdersSagas } from './adminOrders';


export function* watchAdmin() {
    yield takeEvery(actionTypes.INITIATE_GET_ORDERS, getOrdersSagas);
}