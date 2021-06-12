import React from 'react'

import { Accordion, AccordionSummary, Checkbox, Typography } from '@material-ui/core'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

import './ShippingContainer.css';

const ShippingContainer = props => {


    const RenderRow = props => (

        <Accordion key={props.id} className='shipping-container-accordion' onChange={() => props.callback(props.id)} > 
            <AccordionSummary className='shipping-container-item'>
            <div className='icon-container'>
                <Checkbox
                    checked={props.pick === props.id}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<RadioButtonCheckedIcon/>} 
                />
            </div>

            <div className='title-container'>
                <Typography className='title'>{props.title}</Typography>
            </div>

            <div className='price-container'>
                <Typography className='price'>({props.price}zł)</Typography>
            </div>
            
            </AccordionSummary>
        </Accordion>
    )
    


    return (
        <div>
        {props.shippingMethods.map( 
            (item) => <RenderRow {...item} key={item.id} pick={props.pick} callback={props.callback}/>
        )}
        </div>
    )
}

export default ShippingContainer;