import React, { useState } from 'react';
import { connect } from 'react-redux';

import {Button, Typography } from '@material-ui/core';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import SettingsIcon from '@material-ui/icons/Settings';

import Wishlist from './user-body/Wishlist';
import Orders from './user-body/Orders';
import Returns from './user-body/Returns';
import Settings from './user-body/Settings';

import './UserPage.css';
import { signOut } from '../../redux/actions/userActions';



const UserPage = props => {


    const welcomeMsg = `Witaj,`;

    const [userView, setUserView] = useState('orders');
    // console.log('Switched to', userView)
    const UserContent = () => {
        switch (userView) {
            case 'orders':
                return (
                    <Orders />
                )
            case 'wishlist':
                return (
                    <Wishlist />
                )
            case 'returns':
                return (
                    <Returns />
                )
            case 'settings':
                return (
                    <Settings />
                )
            default:
                return (
                    <div></div>
                )
        }
    }

    return (
        <div id='user-page' className='user-page'>

            <div id='user-page-navigator' className='user-page-navigator'>
                <div className='user-page-welcome-message'>
                    <Typography variant='body2'>{welcomeMsg}</Typography>
                    <Typography variant='h6'> {props.user.name}</Typography>
                </div>

                <div className='user-page-navigator-buttons'> 

                    <Button onClick={() => setUserView('orders')} >
                        <FormatListBulletedIcon />
                        <Typography className='user-page-navigator-buttons-typo'>Zamówienia</Typography>
                    </Button>
                    <Button onClick={() => setUserView('wishlist')} >
                        <FavoriteBorderIcon />
                        <Typography className='user-page-navigator-buttons-typo'>Lista życzeń</Typography>
                    </Button>
                    <Button onClick={() => setUserView('returns')} >
                        <KeyboardReturnIcon />
                        <Typography className='user-page-navigator-buttons-typo'>Zwroty i reklamacje</Typography>
                    </Button>
                    
                    <Button onClick={() => setUserView('settings')} >
                        <SettingsIcon />
                        <Typography className='user-page-navigator-buttons-typo'>Ustawienia konta</Typography>
                    </Button>

                    <Button onClick={() => props.signOut()} className='logout-button'>
                        Wyloguj się
                    </Button>
                </div>
            </div>

            <div id='user-page-body' className='user-page-body'>
                {UserContent()}
            </div>
            
        </div>
    )
}



const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        // address: state.userReducer.address,
    }
}


export default connect(mapStateToProps, {signOut})(UserPage);