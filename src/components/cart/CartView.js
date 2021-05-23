import { GridList, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../redux/actions/cartActions';
import './CartView.css';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import ProductPanel from '../products/ProductPanel';
import CartProduct from './CartProduct';



const CartView = props => {


    const emptyCart = 'Brak przedmiotów w koszyku.';
    const cartMsg = 'Przedmioty w twoim koszyku';

    const removeCallback = id => {
        const index = props.cart.findIndex( cartObj => cartObj.item.id === id);
        props.removeItem(index);
    }

    
    if (props.cart && props.cart.length) {
        return (
            <div className='cart-container'>
                <Typography className='cart-text' variant='h5'>{cartMsg}</Typography>
                <GridList cols={3} cellHeight={300} className='cart-gridlist'>
                    {props.cart.map( (product) => ( <CartProduct {...product} cartCallback={removeCallback}/>))}
                </GridList>
            </div>
        )
    } else {
        return (
            <div className='cart-container'>
                <NotInterestedIcon style={{color: '#e53935', width: 100, height: 100}}/>
                <Typography className='cart-text' variant='h5'>{emptyCart}</Typography>  
            </div>
        )
    }
}





const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer.cartItems
    }
}







export default connect(mapStateToProps, { removeItem })(CartView);