import React from 'react';
import './menu-item.scss';

const MenuItem = ({ title, imageURL , size}) => (
    <div style={{backgroundImage:`url(${imageURL})`}} className={`${size} menu-item`} >
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
)


export default MenuItem;