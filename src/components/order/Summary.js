import React, { useEffect, useState } from 'react';
import { Typography, Button } from '@material-ui/core';

import './Summary.css';
// import SummaryItem from './SummaryItem';

const Summary = props => {


    const cartMessage = 'Wartość koszyka';
    const shippingMessage = 'Koszt dostawy';
    // const paymentMessage = 'Koszt płatności';
    const discountMessage = 'Rabat';
    const sum = 'Łącznie';

    const [cartPrice, setCartPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    // const [discount, setDiscount] = useState
    useEffect( () => {
        let sum = 0.0;
        for (let itemObj of props.order.items) {
            sum += itemObj.item.price * itemObj.quantity;
        }
        
        setCartPrice(Math.round(sum * 100) / 100);
    }, [])

    useEffect( () => {

    }, [cartPrice, props.shippingPrice])
    const chooseBorderRadius = index => {
        console.log('indeks:', index);
        if (props.order.items.length <= 1) {
            return {
                borderRadius: 5
            };
        
        } else {    
            //first item
            if(index === 0) {
                return {
                    borderBottomWidth: 0,
                    borderRadius: 0,
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                }

            //last item
            } else if (index === props.order.items.length - 1) {
                return {
                    borderRadius: 0,
                    borderBottomLeftRadius: 5,
                    borderBottomRightRadius: 5
                }

            //any item in between
            } else {
                return {
                    borderBottomWidth: 0,
                    borderRadius: 0
                }
            }
        }
    }


    console.log(props);
    return (
        <div className='summary-container'>
            <Typography>Twoje zamówienie</Typography>

            <div className='summary-panel'>

                {/* Render product item */}
                {props.order.items.map( (item, index) => (
                    <div id='item-summary' key={item.item.id} className='item-div' style={chooseBorderRadius(index)}>
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
                    <Typography>xd</Typography>

                    <div className='price-component'>
                        <Typography className='text'>{cartMessage}</Typography>
                        <Typography className='text'>{cartPrice}zł</Typography>
                    </div>

                    <div className='price-component'>
                        <Typography className='text'>{shippingMessage}</Typography>
                        <Typography className='text'>{props.shippingPrice}zł</Typography>
                    </div>

                    <div className='price-component'>
                        <Typography className='text'>{discountMessage}</Typography>
                        <Typography className='text'>0 zł</Typography>
                    </div>

                    <div className='final-price'>
                        <Typography className='text'>{sum}</Typography>
                        <Typography className='text'>{totalPrice}zł</Typography>
                    </div>
                </div>
                <Button>
                    Nabijam i smażę silver lemon haze
                </Button>

            </div>
        </div>
    )
}


export default Summary;