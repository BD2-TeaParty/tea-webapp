import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import { v4 as uuidv4 } from 'uuid';

import { Button, Typography } from '@material-ui/core';

import { addItem, removeItem, decreaseItem, increaseItem } from '../../redux/actions/cartActions';
import { pushTempOrder } from '../../redux/actions/userActions';

import CartProduct from './CartProduct';
import { calculatePrice } from './util/calculatePrice';
import './CartView.css';


const CartView = props => {


    const emptyCart = 'Brak przedmiotów w koszyku.';
    const totalCost = 'Łączny koszt: ';

    const [price, setPrice] = useState(0.0);

    useEffect( () => { setPrice(calculatePrice(props.cart)); }, []);
    useEffect( () => { setPrice(calculatePrice(props.cart)); }, [props.cart]);

    const removeCallback = id => {
        const index = props.cart.findIndex( cartObj => cartObj.item.id === id);
        props.removeItem(index);
    }

    const addQuantityCallback = id => {
        const index = props.cart.findIndex( cartObj => cartObj.item.id === id);
        props.increaseItem(index)
        
    }

    const decreaseQuantityCallback = id => {
        const index = props.cart.findIndex( cartObj => cartObj.item.id === id);

        if(props.cart[index].quantity - 1 < 1)
            props.removeItem(index);
        else
            props.decreaseItem(index);
    }
    
    const addToTempOrders = () => {
        const tempOrder = {
            id: uuidv4(),
            date: new Date(),
            items: [...props.cart],
            price: price,
            discount: '',
        }

        // console.log('tymczasowe zamowienie', tempOrder);
        props.pushTempOrder(tempOrder);
    }

    const CartItem = ({index, style}) => {
        const obj = props.cart[index];
        // console.log('item:', obj)
        return (
            <CartProduct {...obj} index={index} style={style} 
                cartCallback={removeCallback} 
                addCallback={addQuantityCallback} 
                decreaseCallback={decreaseQuantityCallback}
            />
        )
    }

    

    return (
        <div className='cart-container'>
            <section className='cart-view'>

                <div className='top'>
                    <Typography className='title'>Twój koszyk</Typography>
                </div>

                <div className='content'>
                    <AutoSizer>
                    {({ height, width}) => (
                        <List
                            className='list'
                            height={height}
                            width={width}
                            itemCount={props.cart.length}
                            itemData={props.cart}
                            itemSize={100}
                        >
                                {CartItem}
                        </List>
                    )}
                    </AutoSizer>
                </div>

                <div className='bottom'>
                    <div className='text-container'>
                        <Typography className='info'>{totalCost} </Typography>
                        <Typography className='price'>{price}zł</Typography>
                    </div>

                    <Button component={Link} to='/order' 
                        className='button' 
                        onClick={ () => addToTempOrders()}
                        disabled={!props.cart.length}>
                            KUP TERAZ
                    </Button>
                </div>
            </section>
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        cart: state.cartReducer.cartItems
    }
}


export default connect(mapStateToProps, { addItem, removeItem, decreaseItem, increaseItem, pushTempOrder })(CartView);