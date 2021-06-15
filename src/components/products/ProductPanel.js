import { GridListTile, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import './ProductPanel.css';

const ProductPanel = props => {

    // console.log('\nproduct panel ', props);
    return (

        <GridListTile className='gridlist-item'>

            <img src={props.img} alt={props.title} className='product-panel-image'/>

            <Typography className='product-panel-title-text' variant='h6'>{props.title}</Typography>
            
            <div className='product-panel-description'>
                <Typography nowrap='true' className='product-panel-description-text'>{props.description}</Typography>
            </div>

            <div className='product-panel-bottom-bar'>
                <IconButton className='product-panel-icon' onClick={ () => props.wishlistCallback(props.id)}>
                    {props.isOnWishlist ?
                        <FavoriteIcon style={{color: '#d50000'}}/>
                    :
                        <FavoriteBorderIcon style={{color: '#d50000'}}/>
                    }
                </IconButton>
                <IconButton className='product-panel-icon' onClick={ () => props.cartCallback(props.id)}>
                    <AddShoppingCartIcon style={{color: 'green'}}/>
                </IconButton>

            </div>
        </GridListTile> 
    )
}



export default connect()(ProductPanel);