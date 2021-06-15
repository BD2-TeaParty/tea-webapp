import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@material-ui/core';
import { FixedSizeList as List } from 'react-window';
import { connect } from 'react-redux';

import './Orders.css';


const Orders = props => {

    const RenderOrder = ({item, index}) => {
        console.log('renderorder', item, index);
        return (
        <Accordion key={item.id} style={{marginTop: 10, border: '1px solid #ccc'}}>
            <AccordionSummary className='user-order-accordion-summary'>
                <Typography className='index'>{index + 1}</Typography>
                <div className='id-div'>
                    <Typography className='id'>{item.id}</Typography>
                    <Typography className='date'>{item.date.toISOString()}</Typography>
                </div>
                <Typography className='price'>{item.totalPrice}zł</Typography>
            </AccordionSummary>

            <AccordionDetails className='user-order-accordion-details'>
                {item.items.map( (item, index) => (
                    <div className='row'>
                        <Typography className='title'>{item.item.title}</Typography>
                        <Typography className='price-quantity'>{item.quantity}x{item.item.price} = {item.quantity*item.item.price}zł</Typography>   
                    </div>
                ))}
            </AccordionDetails>
        </Accordion>
    )}
    
    console.log('zamowienia:', props);
    return (
        <div className='user-orders-container'>
            <Typography className='title'>Twoje Zamówienia</Typography>

            {props.items.length ?
                props.items.map( (item, index) => <RenderOrder item={item} index={index}/>)
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