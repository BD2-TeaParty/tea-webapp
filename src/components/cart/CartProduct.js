import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import './CartProduct.css';

const CartProduct = props => {


    const quantityMsg = 'W koszyku:';
    const removeMsg = 'Usuń z koszyka';
    const totalPrice = Math.round(props.quantity * props.item.price * 100) / 100;
    console.log(props);
    return (
        <div style={props.style} className='cart-product-container' >
            <Typography>{props.index + 1}.</Typography>
            <div className='img-container'>
                <img src={props.item.img} alt={`${props.item.title}`} />
            </div>

            <div className='text-container'>
                <Typography className='title'>{props.item.title}</Typography>
                <Typography className='description'>{props.item.description.substring(0,100) + '...'}</Typography>
            </div>


            <div className='quantity-container'>
                <Typography className='price'>{props.quantity} x {props.item.price}zł = {totalPrice}zł</Typography>
                
                <div className='buttons'>
                    <IconButton onClick={ () => props.decreaseCallback(props.item.id)}>
                        <RemoveIcon/>
                    </IconButton>

                    <IconButton onClick={ () => props.addCallback(props.item.id)}>
                        <AddIcon />
                    </IconButton>
                </div>
            </div>

            <div className='remove-container'>
                <IconButton className='cart-item-icon' onClick={ () => props.cartCallback(props.item.id)}>
                    <Typography>{removeMsg}</Typography>
                    <RemoveShoppingCartIcon style={{color: 'd50000'}}/>
                </IconButton>
            </div>
        </div>
    )
}



export default CartProduct;