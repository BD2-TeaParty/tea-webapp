import React from 'react';
import { Typography, IconButton } from '@material-ui/core';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import './CartProduct.css';

const CartProduct = props => {


    const quantityMsg = 'W koszyku:';
    const removeMsg = 'Usuń z koszyka';
    console.log(props);
    return (
        <div className='cart-product-container'>
            <Typography>{props.index}.</Typography>
            <div className='img-container'>
                <img src={props.item.img} alt={`${props.item.title}`} />
            </div>

            <div className='text-container'>
                <Typography className='title'>{props.item.title}</Typography>
                <Typography className='description'>{props.item.description.substring(0,100) + '...'}</Typography>
            </div>


            <div className='quantity-container'>
                <Typography className='cart-item-quantity'>{quantityMsg} {props.quantity}</Typography>
                
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