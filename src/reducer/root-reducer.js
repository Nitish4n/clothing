import { combineReducers } from 'redux';

import UserReducer from './user-reducer/user-reducer';
import CartReducer from './cart-reducer/cart-reducer';

export default combineReducers({
    user:UserReducer,
    cart:CartReducer
});
