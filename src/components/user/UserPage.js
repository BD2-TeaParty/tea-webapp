import { Accordion, AccordionDetails, AccordionSummary, Typography, withStyles } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

import './UserPage.css';

const CustomAccordion = withStyles( () => ({
    root: {
        width: '80%',
        background: 'rgba(0,0,0,0)',
        textAlign: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderColor: '#C51162',
        color: '#C51162',
        borderWidth: 1,
        borderRadius: 5,
        boxShadow: 'box-shadow: 10px 2px 10px 2px rgba(0,0,0,.2);',
        marginTop: '20px',
        
    },
    expanded: {
        // background: 'rgba(1,1,1,0.5)',
        // color: '#fff',
        width: '80%',
        height: 500,
    }
}))(Accordion);



const UserPage = props => {

    const welcomeMsg = `Witaj >>>${props.user.name}<<<`;
    return (
        <section id='user-page' className='user-page-container'>
            <div id='user-panel' className='user-page-panel'>

                <div id='user-panel-title-view' className='user-page-panel-title-view'>
                    <Typography className='user-page-panel-title'>{welcomeMsg}</Typography>
                </div>

                <div id='user-panel-content' className='user-page-panel-content'>
                    <CustomAccordion variant='outlined'>
                        <AccordionSummary className='user-page-panel-accordion-summary' >
                            <Typography>Lista Życzeń</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>Xd</Typography>
                        </AccordionDetails>
                    </CustomAccordion>
                    <CustomAccordion variant='outlined'>
                        <AccordionSummary >
                            <Typography>Zamówienia</Typography>
                        </AccordionSummary>
                    </CustomAccordion>
                    <CustomAccordion variant='outlined'>
                        <AccordionSummary >
                            <Typography>Xd</Typography>
                        </AccordionSummary>
                    </CustomAccordion> 
                </div>
                
            </div>
        </section>
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