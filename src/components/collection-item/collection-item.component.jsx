import React from 'react';
import {connect} from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import {addItemToCart} from '../../reducer/cart-reducer/cart-actions';
import './collection-item.component.style.scss';



const CollectionItem = ({item, addItemToCart}) => (
    <div className="collection-item">
        <div className="image" style={{backgroundImage: `url(${item.imageUrl})`}}>
        </div>
        <div className="collection-footer">
            <span className="name">{item.name}</span>
            <span className="price">{item.price}</span>
        </div>
        
        <CustomButton onClick={() => addItemToCart(item)} isInverted>Add to cart </CustomButton>
    </div>
)

const mapDispatchToProps = dispatch => ({
    addItemToCart: (item) => dispatch(addItemToCart(item))
})


export default connect(null, mapDispatchToProps)(CollectionItem);