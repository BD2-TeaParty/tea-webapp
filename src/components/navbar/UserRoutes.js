import React from 'react'
import { NavLink } from 'react-router-dom'
import PersonIcon from '@material-ui/icons/Person';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
const UserRoutes = () => {


    return (
        <div>
            <NavLink to='/user'>
                <PersonIcon />
            </NavLink>

            <NavLink to='/user/wishlist'>
                <FavoriteBorderIcon />
            </NavLink>

            <NavLink to='/cart'>
                <ShoppingCartIcon />
            </NavLink>
        </div>
    )
}


export default UserRoutes;