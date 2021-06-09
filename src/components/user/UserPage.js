import {Button, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import SettingsIcon from '@material-ui/icons/Settings';

import './UserPage.css';



const UserPage = props => {




    const welcomeMsg = `Witaj,`;// >>>${props.user.name}<<<`;
    return (
        <div id='user-page' className='user-page'>

            <div id='user-page-navigator' className='user-page-navigator'>
                <div className='user-page-welcome-message'>
                    <Typography variant='body2'>{welcomeMsg}</Typography>
                    <Typography variant='h6'> {props.user.name}</Typography>
                </div>

                <div className='user-page-navigator-buttons'>
                    {/* <Typography variant='body2'>{welcomeMsg}</Typography> */}
                    <Button>
                        <FormatListBulletedIcon />
                        <Typography className='user-page-navigator-buttons-typo'>Zamówienia</Typography>
                    </Button>
                    <Button>
                        <FavoriteBorderIcon />
                        <Typography className='user-page-navigator-buttons-typo'>Lista życzeń</Typography>
                    </Button>
                    <Button>
                        <KeyboardReturnIcon />
                        <Typography className='user-page-navigator-buttons-typo'>Zwroty i reklamacje</Typography>
                    </Button>
                    
                    <Button>
                        <SettingsIcon />
                        <Typography className='user-page-navigator-buttons-typo'>Ustawienia konta</Typography>
                    </Button>
                </div>
            </div>

            <div id='user-page-body' className='user-page-body'>
                
            </div>
            
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