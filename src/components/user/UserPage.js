import { Accordion, AccordionDetails, AccordionSummary, Button, Typography, withStyles } from '@material-ui/core';
import React, { useState } from 'react';
import { connect } from 'react-redux';

import './UserPage.css';
import Wishlist from './Wishlist';

const CustomAccordion = withStyles( () => ({
    root: {
        marginTop: 10,
        width: '75%',
        // height: '15%',
        background: 'rgba(0,0,0,0)',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderColor: '#C51162',
        color: '#C51162',
        borderWidth: 1,
        borderRadius: 5,
        boxShadow: 'box-shadow: 10px 2px 10px 2px rgba(0,0,0,.2);',
        // marginTop: '20px',
        
    },
    expanded: {
    //     // width: '100%',
        height: '50%',
    }
}))(Accordion);



const UserPage = props => {


    const [expanded, setExpanded] = useState('');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    }

    const welcomeMsg = `Witaj >>>${props.user.name}<<<`;
    return (
        <div id='user-page' className='user-page'>
            {/* <div id='user-panel' className='user-page-panel'>

                <div id='user-panel-title-view' className='user-page-panel-title-view'>
                    <Typography className='user-page-panel-title'>{welcomeMsg}</Typography>
                </div>

                <div id='user-panel-content' className='user-page-panel-content'>
                    <CustomAccordion variant='outlined' expanded={expanded == 'wishlist'} onChange={handleChange('wishlist')}>
                        <AccordionSummary className='user-page-panel-accordion-summary' >
                            <Typography>Lista Życzeń</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Wishlist items={props.wishlist}/>
                        </AccordionDetails>
                    </CustomAccordion>
                    <CustomAccordion variant='outlined' expanded={expanded == 'orders'} onChange={handleChange('orders')}>
                        <AccordionSummary >
                            <Typography>Zamówienia</Typography>
                        </AccordionSummary>
                    </CustomAccordion>
                    <CustomAccordion variant='outlined'>
                        <AccordionSummary >
                            <Typography>Xd</Typography>
                        </AccordionSummary>
                    </CustomAccordion>  *
                    
                </div>
                <div id='user-panel-end' className='user-page-panel-logout'>
                    <Button>
                        <Typography>Wyloguj</Typography>
                    </Button>
                </div>
            </div> */}
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        address: state.userReducer.address,
        orders: state.userReducer.orders,
        wishlist: state.userReducer.wishlist,
    }
}


export default connect(mapStateToProps)(UserPage);