import CartActionType from './cart-types';


export const cartDropDownToggle = () =>({
    type: CartActionType.TOGGLE_CART_DROPDOWN
})

export const addItemToCart = (cartItem) => ({
    type: CartActionType.ADD_ITEM,
    payload: cartItem 
})
