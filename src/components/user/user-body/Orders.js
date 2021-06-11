import React from 'react';
import { Typography } from '@material-ui/core';
import { FixedSizeList as List } from 'react-window';
import { connect } from 'react-redux';

import './Orders.css';


const Orders = props => {

    const orderRow = ({ index, style}) => {
        return (
            <Typography>{index}</Typography>
        )
    }
    return (
        <div className='user-orders-container'>
            <Typography className='title'>Twoje Zamówienia</Typography>

            {props.items.length ?
                <List>
                    {orderRow}
                </List>
            :
                <Typography>Brak zamówień :(</Typography>
            }
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        items: state.userReducer.orders,
    }
}
export default connect(mapStateToProps)(Orders);