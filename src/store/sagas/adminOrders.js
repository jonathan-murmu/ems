import { put } from 'redux-saga/effects';
//import axios from '../../axios_pics';
import { orders } from './data/orders'
import * as actions from '../actions';


export function* getOrdersSagas (action) {
  try {
    // const response = yield axios.get('https://insta-7bcc9.firebaseio.com/photos.json');
    const response = yield orders;
    yield put(actions.setOrders(response.data));
  } catch (error) {
    yield put(actions.setOrdersFailed());
  }
}