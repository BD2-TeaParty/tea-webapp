import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './ProductRoutes.css';
import EcoIcon from '@material-ui/icons/Eco';
import { Button, Typography } from '@material-ui/core';

const ProductRoutes = () => {

{/* <Button component={Link} to='/user/wishlist' className='wishlist-button' ></Button> */}

{/* <div className='wishlist-span'>
            <Button component={Link} to='/user/wishlist' className='wishlist-button' >
                <FavoriteBorderIcon style={{ fontSize: 20, color: '#D81B60' }}/>
            </Button>
            </div> */}

    return (
        // <nav>
            <div className='sub-container'>
                <div className='logo-container'>
                    <Button component={Link} to='/'  className='logo-button'>
                        <EcoIcon style={{marginRight: 10}}/>
                        <Typography >TeaCommerce</Typography>
                        
                    </Button>
                </div>

                <div className='link-container'>
                    <Button component={Link} to='/tea' className='button'>
                        Herbata
                    </Button>
                </div>

                <div className='link-container'>
                    <Button component={Link} to='/coffee' className='button'>
                        Kawa
                    </Button>
                    {/* <NavLink to='/coffee'>Kawa</NavLink> */}
                </div>

                <div className='link-container'>
                    <Button component={Link} to='/accessories' className='button'>
                    Akcesoria
                    </Button>
                </div>
            </div>
        // </nav>
    
    )
}




export default ProductRoutes;