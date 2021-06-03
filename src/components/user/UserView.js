import { Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import LoginPanel from './LoginPanel';

import './UserView.css'




const UserView = props => {


    console.log('user view', props)
    return (
        <section id='user-view' className='user-view'>
            {/* <Typography>logged in: {props.isLoggedIn ? 'yes' : 'no'}</Typography> */}
            <LoginPanel />
        </section>
    )
}


const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.userReducer.isLoggedIn
    }
}

export default connect(mapStateToProps)(UserView);