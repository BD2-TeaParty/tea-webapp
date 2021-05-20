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
            <div>
                <ProductRoutes />

            </div>
            <div>
                <UserRoutes />
            </div>
        </div>
    )
}


export default Navbar;