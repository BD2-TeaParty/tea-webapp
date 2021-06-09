import { GridListTile, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import './CartProduct.css';

const CartProduct = props => {


    const quantityMsg = 'W koszyku:';
    const removeMsg = 'Usuń z koszyka';

    return (

        <GridListTile key={props.item.id} className='cart-gridlist-item '>

            <img src={props.item.img} alt={props.item.title} className='cart-item-img'/>

            <div className='cart-item-title-view '>
                <Typography variant='h6' className='cart-item-title'>{props.item.title}</Typography>
            </div>
            <div className='cart-item-description-view'>
                <Typography className='cart-item-description-text'>{props.item.description}</Typography>
            </div>
            <Typography className='cart-item-quantity'>{quantityMsg} {props.quantity}</Typography>
            <div className='cart-item-bottombar'>
            <div className='cart-item-subadd'>
                <IconButton onClick={ () => props.decreaseCallback(props.item.id)}>
                    <RemoveIcon/>
                </IconButton>

                <IconButton onClick={ () => props.addCallback(props.item.id)}>
                    <AddIcon />
                </IconButton>
            </div>
               
                <IconButton className='cart-item-icon' onClick={ () => props.cartCallback(props.item.id)}>
                    <Typography>{removeMsg}</Typography>
                    <RemoveShoppingCartIcon style={{color: 'd50000'}}/>
                </IconButton>

            </div>

        </GridListTile> 
    )
}



export default connect()(CartProduct);