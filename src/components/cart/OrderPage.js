import React from 'react';


import './OrderPage.css';

const OrderPage = props => {

    return (
        <div className='order-container'>
            <div className='order-body'>

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


export default OrderPage;