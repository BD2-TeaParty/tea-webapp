import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import PersonOutlineIcon from '@material-ui/icons/Person';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

import './UserRoutes.css';
import { Button } from '@material-ui/core';
const UserRoutes = () => {


    return (
        <div className='user-container'>

            <Button component={Link} to='/user' className='account-button'>
                <PersonOutlineIcon style={{ fontSize: 30 }}/>
            </Button>

            <div className='wishlist-span'>
                <Button component={Link} to='/user/wishlist' className='wishlist-button' >
                    <FavoriteBorderIcon style={{ fontSize: 15, color: '#d50000' }}/>
                </Button>
            </div>

            <div className='cart-div'>
            <Button component={Link} to='/cart' className='cart-button'>
                <ShoppingCartOutlinedIcon style={{ fontSize: 30, color: '#222' }}/>
                {/* Koszyk */}
            </Button>
            </div>
        </div>
    )
}


export default UserRoutes;