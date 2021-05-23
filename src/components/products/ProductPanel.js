import { GridListTile, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';

import img1 from '../../assets/t1.jpg';
import './ProductPanel.css';

const ProductPanel = props => {

    console.log('\nproduct panel ', props);
    return (
        // <GridListTile>
        <GridListTile key={props.id} className='gridlist-item'>
        {/* <div> */}
            <img src={img1} className='product-panel-image'/>

            <Typography className='product-panel-title'>{props.title}</Typography>
            
            <Typography>{props.description}</Typography>
            <div className='product-panel-bottom-bar'>

            </div>
        </GridListTile> 
        // {/* </div> */}
    )
}



export default connect()(ProductPanel);