import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';

import { Typography, Button, TextField } from '@material-ui/core';

import { calculateTotalPrice } from './util/calculateTotalPrice';
import { validateDiscount } from './util/validateDiscount';
import './Summary.css';
import { itemBorderRadius } from './util/itemBorderRadius';
import HelpText from '../util/HelpText';



const Summary = props => {

    const helpText = 'Testowe rabaty: BD2-10OFF ____ BD2-50PLNOFF ____ BD2-SHIPOFF  w src/redux/reducers/user.js'
    const cartMessage = 'Wartość koszyka';
    const shippingMessage = 'Koszt dostawy';
    const paymentMessage = 'Koszt płatności';
    const discountMessage = 'Rabat';
    const sum = 'Łącznie';
    const discountLabel ='Kod rabatowy';
    const discountRef = useRef();

    const [cartPrice, setCartPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [discount, setDiscount] = useState(null);
    const [discountValidated, setDiscountValidated] = useState(false);
    const [discountPrice, setDiscountPrice] = useState(0);
    const validateCallback = validation => { setDiscountValidated(validation)};

    const calculateDiscountPrice = () => {
        if (discount !== null && discountValidated) {
            switch (discount.type) {
                case 'regular':
                    setDiscountPrice(discount.value);
                    break;
                case 'factor':
                    setDiscountPrice(Math.round(cartPrice * discount.factor * 100) / 100);
                    break;
                case 'shipping':
                    setDiscountPrice(Math.round(props.shippingPrice * discount.factor * 100) / 100);
                    break;
                default:
                    break;
            }
        } else setDiscountPrice(0);
    }

    //update cart price
    useEffect( () => {
        let sum = 0.0;
        for (let itemObj of props.order.items) {
            sum += itemObj.item.price * itemObj.quantity;
        }
        
        setCartPrice(Math.round(sum * 100) / 100);
    }, [])

    //update total price
    useEffect( () => { 
        const total = calculateTotalPrice(cartPrice, props.shippingPrice, props.paymentPrice, discountValidated, discount); 
        setTotalPrice(total);
    }, [cartPrice, props.shippingPrice, discount, discountValidated, discountPrice])

    //update discount price
    useEffect( () => {
        calculateDiscountPrice();
    }, [discount, discountValidated, props.shippingPrice]);
    
    //search for discount
    const tryApplyingDiscount = () => {
        setDiscount(null);
        setDiscountValidated(false);
        const code = discountRef.current.value;
        // console.log('kodzik', code);
        for (let discountObj of props.availableDiscounts) {
            if (discountObj.code === code) {
                setDiscount(discountObj);
                validateDiscount(cartPrice, discountObj, validateCallback);
                break;
            }
        }
    }
    



    return (
        <div className='summary-container'>
            <HelpText text={helpText}/>
            <Typography>Twoje zamówienie</Typography>

            <div className='summary-panel'>

                {/* Render product item */}
                {props.order.items.map( (item, index) => (
                    <div id='item-summary' key={item.item.id} className='item-div' style={itemBorderRadius(index, props.order.items.length)}>
                        <img src={item.item.img} alt={item.item.title} />

                        <div id='title-container' className='text-view'>
                            <Typography id='product-id' className='title'>{item.item.title}</Typography>
                        </div>

                        <div id='price-quantity-container' className='qp'>
                            <Typography id='price' className='price'>{item.item.price * item.quantity}zł</Typography>
                            <Typography id='quantity' className='quantity'>{item.quantity} szt.</Typography>
                        </div>
                    </div>
                ))}

                <div id='price-summary' className='price-summary'>
                    
                    <div id='discount' className='discount'>
                        <TextField inputRef={discountRef} className='textfield' id='discount' label={discountLabel} defaultValue={props.order.discount} />
                        <Button onClick={ () => tryApplyingDiscount()}>
                            ok
                        </Button>
                    </div>

                    <div className='price-component'>
                        <Typography className='text'>{cartMessage}</Typography>
                        <Typography className='text'>{cartPrice}zł</Typography>
                    </div>

                    <div className='price-component'>
                        <Typography className='text'>{shippingMessage}</Typography>
                        <Typography className='text'>{props.shippingPrice}zł</Typography>
                    </div>

                    <div className='price-component'>
                        <Typography className='text'>{paymentMessage}</Typography>
                        <Typography className='text'>{props.paymentPrice}zł</Typography>
                    </div>

                    <div className='price-component'>
                        <Typography className='text'>{discountMessage}</Typography>
                        <Typography className='text'>{discountPrice}zł</Typography>
                    </div>

                    <div className='final-price'>
                        <Typography className='text'>{sum}</Typography>
                        <Typography className='text'>{totalPrice}zł</Typography>
                    </div>
                </div>

                <div className='pay-view'>
                    <Button className='pay-button' onClick={ () => props.confirmOrder(totalPrice, props.shippingPrice, discountPrice)}>
                        Potwierdzam i kupuję
                    </Button>
                </div>                
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        availableDiscounts: state.userReducer.availableDiscounts
    }
}
export default connect(mapStateToProps)(Summary);