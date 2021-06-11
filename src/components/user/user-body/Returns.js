import React from 'react';
import { connect } from 'react-redux';
import { Typography } from '@material-ui/core';


import './Returns.css';


const Returns = props => {

    const title = 'Zwroty i reklamacje';
    const emptyMsg = 'Brak zamówień do zwrócenia lub reklamacji c:'
    return (
        <div className='user-returns-container'>
            <Typography className='title'> {title}</Typography>
            {props.items.length ? 
                null
            :
                <Typography>{emptyMsg}</Typography>    
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.userReducer.orders,
    }
}
export default connect(mapStateToProps)(Returns);