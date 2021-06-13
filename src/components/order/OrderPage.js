import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { Typography } from '@material-ui/core';

import './OrderPage.css';
import ShippingContainer from './ShippingContainer';
import PaymentContainer from './PaymentContainer';
import BuyerDetails from './BuyerDetails';
import Summary from './Summary';
import PaymentModal from './PaymentModal';
import { confirmOrder } from '../../redux/actions/userActions';


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
            // description: 'bezpłatnie',
            price: 0.0
        },
        {
            id: 1,
            title: 'Karta płatnicza',
            // description: 'bezpłatnie',
            price: 0.0
        },
        {
            id: 2,
            title: 'Szybki przelew (PayU)',
            // description: 'bezpłatnie',
            price: 0.0
        },
    ]

    const [shippingMethod, setShippingMethod] = useState(0);
    const [shippingPrice, setShippingPrice] = useState(0);
    const shippingCallback = id => { setShippingMethod(id); }
    useEffect( () => { setShippingPrice(shippingMethods[shippingMethod].price)}, [shippingMethod]);

    const [paymentMethod, setPaymentMethod] = useState(0);
    const [paymentPrice, setPaymentPrice] = useState(0);
    const paymentCallback = id => { setPaymentMethod(id); }
    useEffect( () => { setPaymentPrice(paymentMethods[paymentMethod].price)}, [paymentMethod]);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const handleModalClose = () => {
        setModalIsOpen(false);
    }
    const confirmOrder = (totalPrice) => {
        order.totalPrice = totalPrice;
        props.confirmOrder(order);
        setModalIsOpen(true);

        setTimeout( () => {
            handleModalClose()
        }, 3000);
    }
    return (
        <div className='order-container'>
            {props.tempOrders.length ?
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
                    <Summary order={order} shippingPrice={shippingPrice} paymentPrice={paymentPrice} modalIsOpen={modalIsOpen} confirmOrder={confirmOrder}/>
                </section>
                <PaymentModal open={modalIsOpen}/>
            </div>
            
            : <Typography style={{textAlign: 'center', marginTop: '25%'}}>Brak składanego zamówienia w sesji!</Typography>
            }
        </div>

    )
}


const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        address: state.userReducer.address,
        tempOrders: state.userReducer.tempOrders,
        confirmOrderLoading: state.userReducer.confirmOrderLoading,
        confirmOrderError: state.userReducer.confirmOrderError,
    }
}


export default connect(mapStateToProps, {confirmOrder})(OrderPage);