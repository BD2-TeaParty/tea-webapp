import { GridListTile, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';

// import img1 from '../../assets/t1.jpg';
import './CartProduct.css';

const CartProduct = props => {

    // console.log('\nproduct panel ', props);

    const quantityMsg = 'W koszyku:';
    const removeMsg = 'Usuń z koszyka';
    return (

        <GridListTile key={props.item.id} className='cart-gridlist-item '>

            <img src={props.item.img} className='cart-item-img'/>

            <Typography className='cart-item-title'>{props.item.title}</Typography>
            
            <div className='cart-item-description-view'>
                <Typography className='cart-item-description-text'>{props.item.description}</Typography>
            </div>

            <div className='cart-item-bottombar'>

                <Typography className='cart-item-quantity'>{quantityMsg} {props.quantity}</Typography>
                <IconButton className='cart-item-icon' onClick={ () => props.cartCallback(props.item.id)}>
                    <Typography>{removeMsg}</Typography>
                    <RemoveShoppingCartIcon style={{color: 'd50000'}}/>
                </IconButton>

                {/* <Typography>{quantityMsg} {props.quantity}</Typography> */}
            </div>
        </GridListTile> 
    )
}



export default connect()(CartProduct);