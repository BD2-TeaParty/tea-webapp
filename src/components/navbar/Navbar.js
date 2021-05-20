import React from 'react';
import './Navbar.css';
import ProductRoutes from './ProductRoutes';
import UserRoutes from './UserRoutes';



/*
struktura 
    stronka.pl wszystkie produkty
    /tea
    /accessories
    /coffee
    /user
    /cart
    /

*/

const Navbar = () => {


    return (
        <div className='nav-container'>
            {/* <div className='product-router-container'> */}
                <ProductRoutes />

            {/* </div> */}
            {/* <div className='user-router-container'> */}
                <UserRoutes />
            {/* </div> */}
        </div>
    )
}


export default Navbar;