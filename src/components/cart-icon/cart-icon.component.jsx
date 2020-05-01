import React from 'react';
import {connect} from 'react-redux';
import {ReactComponent as ShoppingIcon } from '../../assets/original.svg';
import {cartDropDownToggle} from '../../reducer/cart-reducer/cart-actions';
import './cart-icon.style.scss';



const CartIcon = ({cartDropDownToggle}) => {
    return (
        <div className="cart-icon" onClick={cartDropDownToggle}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    cartDropDownToggle: () => dispatch(cartDropDownToggle())
})

export default connect(null, mapDispatchToProps)(CartIcon);