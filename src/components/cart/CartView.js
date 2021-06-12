import { Button, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, decreaseItem, increaseItem } from '../../redux/actions/cartActions';
import './CartView.css';
// import NotInterestedIcon from '@material-ui/icons/NotInterested';
import CartProduct from './CartProduct';
import { FixedSizeList as List } from 'react-window';
import AutoSizer from "react-virtualized-auto-sizer";
import { calculatePrice } from './util/calculatePrice';

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
    
    const CartItem = ({index, style}) => {
        const obj = props.cart[index];
        console.log('item:', obj)
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
                    <Button>
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


export default connect(mapStateToProps, { addItem, removeItem, decreaseItem, increaseItem })(CartView);