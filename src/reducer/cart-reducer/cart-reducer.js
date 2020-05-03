import CartActionType from './cart-types';
import { addQuantityToCart } from './cart.utils';

const INITIAL_STATE = {
    hidden: true,
    cartItem: []
}


const CartReducer = (state = INITIAL_STATE, action) => {

    switch(action.type){
        case CartActionType.TOGGLE_CART_DROPDOWN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case  CartActionType.ADD_ITEM:
            return {
                ...state,
                cartItem: addQuantityToCart(state.cartItem, action.payload)
            }
        default:
            return state;
    }
}


export default CartReducer;