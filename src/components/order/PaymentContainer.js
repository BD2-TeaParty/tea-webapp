import React from 'react';

import { Accordion, AccordionSummary, Checkbox, Typography } from '@material-ui/core'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';

import './PaymentContainer.css';

const PaymentContainer = props => {


    const PaymentRow = props => (
        <Accordion key={props.id} className='payment-container-accordion' onChange={() => props.callback(props.id)} > 
            <AccordionSummary className='payment-container-item'>
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
            </AccordionSummary>
        </Accordion>
    )


    return ( 
        <div>
            {props.methods.map( (item) => <PaymentRow {...item} key={item.id} callback={props.callback} pick={props.pick}/>)}
        </div>
    )
}


export default PaymentContainer;