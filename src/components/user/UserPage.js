import { Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

import './UserPage.css';

const UserPage = props => {

    const welcomeMsg = `Witaj >>>${props.user.name}<<<`;
    return (
        <section id='user-page' className='user-page-container'>
            <div id='user-panel' className='user-page-panel'>

                <div id='user-panel-title-view' className='user-page-panel-title-view'>
                    <Typography className='user-page-panel-title'>{welcomeMsg}</Typography>
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