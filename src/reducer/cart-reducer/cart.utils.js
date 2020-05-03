export const addQuantityToCart = (cartItems, newCartItems) => {
    const cartItemExist = cartItems.find(cartItem => {
       return cartItem.id === newCartItems.id
    })

    if(cartItemExist) {
        return cartItems.map(cartItem => 
            cartItem.id === newCartItems.id
            ?
                 {...cartItem, quantity: cartItem.quantity + 1}
            :
                 cartItem
                   
        )
    }else{
        return [...cartItems ,{...newCartItems, quantity: 1}]
    }
}

