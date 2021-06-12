import React, { useState } from 'react';
import { connect } from 'react-redux';

import { Typography } from '@material-ui/core';

import './OrderPage.css';
import ShippingContainer from './ShippingContainer';
import PaymentContainer from './PaymentContainer';
import BuyerDetails from './BuyerDetails';


const OrderPage = props => {

    let order;
    if ( props.tempOrders !== undefined && props.tempOrders.length )
        order = props.tempOrders[ props.tempOrders.length - 1];

    const shippingMethods = [
        {
            id: 0,
            title: 'Kurier - DHL, DPD lub Poczta Polska',
            price: 15.99
        },
        {
            id: 1,
            title: 'List polecony - Poczta Polska',
            price: 11.99
        },
        {
            id: 2,
            title: 'Paczkomaty InPost 24/7',
            price: 9.99,
        },
        {
            id: 3,
            title: 'Odbiór osobisty w Punkcie Odbioru TeaCommerce',
            price: 0.00
        }
    ]

    const paymentMethods = [
        {
            id: 0,
            title: 'BLIK',
            description: 'bezpłatnie'
        },
        {
            id: 1,
            title: 'Karta płatnicza',
            description: 'bezpłatnie'
        },
        {
            id: 2,
            title: 'Szybki przelew (PayU)',
            description: 'bezpłatnie'
        },
    ]

    const [shippingMethod, setShippingMethod] = useState(0);
    const shippingCallback = id => { setShippingMethod(id); }

    const [paymentMethod, setPaymentMethod] = useState(0);
    const paymentCallback = id => { setPaymentMethod(id); }

    return (
        <div className='order-container'>
            <div className='order-body'>
                <section className='user-choice'>
                    <Typography className='title'>Dostawa i płatność</Typography>
                        <div className='shipping'>
                            <Typography className='subtitle'>1. Sposób dostawy</Typography>
                            <ShippingContainer shippingMethods={shippingMethods} pick={shippingMethod} callback={shippingCallback}/>
                        </div>

                        <div className='payment'>
                            <Typography className='subtitle'>2. Metoda płatności</Typography>
                            <PaymentContainer methods={paymentMethods} pick={paymentMethod} callback={paymentCallback} />
                        </div>

                        <div className='user-data'>
                            <Typography className='subtitle'>3. Dane kupującego</Typography>
                            <BuyerDetails/>
                        </div>
                </section>

                <section className='cart-data'>
                    
                </section>
            </div>
        </div>

    )
}


const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        address: state.userReducer.address,
        tempOrders: state.userReducer.tempOrders
    }
}


export default connect(mapStateToProps)(OrderPage);