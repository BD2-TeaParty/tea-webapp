import React from 'react';
import { NavLink } from 'react-router-dom';
import './ProductRoutes.css';
import EcoIcon from '@material-ui/icons/Eco';

const ProductRoutes = () => {



    return (
        <nav>
            <div>
                <NavLink to='/'>
                    <EcoIcon />
                </NavLink>
                <NavLink to='/tea'>
                    Herbata
                </NavLink>

                <NavLink to='/coffee'>
                    Kawa
                </NavLink>

                <NavLink to='/accessories'>
                    Akcesoria
                </NavLink>
            </div>
        </nav>
    
    )
}




export default ProductRoutes;