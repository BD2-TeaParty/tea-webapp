import { Typography } from '@material-ui/core';
import React from 'react';


import './HelpText.css';



const HelpText = ({ text }) => (

    <div className='dev-container'>
        <Typography className='text'>{text}</Typography>
    </div>

)


export default HelpText;