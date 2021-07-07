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
import { clearCart } from '../../redux/actions/cartActions';


const UserOption = ({ text, IconComponent, callback}) => (
    <Button onClick={() => callback()}>
        <IconComponent />
        <Typography className='user-page-navigator-buttons-typo'>{text}</Typography>
    </Button>
)


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

    const logout = () => {
        props.clearCart();
        props.signOut();
    }

    return (
        <div id='user-page' className='user-page'>

            <div id='user-page-navigator' className='user-page-navigator'>

                <div className='user-page-welcome-message'>

                    <Typography variant='body2'>{welcomeMsg}</Typography>
                    <Typography variant='h6'> {props.user.name}</Typography>
                </div>

                <div className='user-page-navigator-buttons'> 

                    <UserOption 
                        callback={() => setUserView('orders')}
                        IconComponent={FormatListBulletedIcon}
                        text='Zamówienia'
                    />

                    <UserOption 
                        callback={() => setUserView('wishlist')}
                        IconComponent={FavoriteBorderIcon}
                        text='Lista życzeń'
                    />

                    <UserOption 
                        callback={() => setUserView('returns')}
                        IconComponent={KeyboardReturnIcon}
                        text='Zwroty i reklamacje'
                    />

                    <UserOption 
                        callback={() => setUserView('settings')}
                        IconComponent={SettingsIcon}
                        text='Ustawienia konta'
                    />

                    <Button onClick={() => logout()} className='logout-button'>
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


export default connect(mapStateToProps, {signOut, clearCart})(UserPage);