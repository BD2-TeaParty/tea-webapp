import React from 'react';
import { Button, LinearProgress, Modal, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import './PaymentModal.css';

const PaymentModal = props => {

    const renderModalContent = React.useMemo(() => {
        console.log('PaymentModal props', props);
        //loading
        if (props.confirmOrderLoading && !props.confirmOrderError) {
            return (
                <div className='modal-container'>
                    <div className='icon-div' style={{width: '100%'}}>
                    <LinearProgress className='progress'/>
                    <Typography className='title' style={{margin: '10%'}}> Proces opłaty </Typography>
                    </div>
                </div>
            )
        
        //error
        } else if (!props.confirmOrderLoading && props.confirmOrderError) {
            return (
                <div className='modal-container'>
                    <Typography className='title'>error</Typography>
                </div>
            )
        
        //success or unknown ;-;
        } else {
            return (
                <div className='modal-container'>
                    <div className='icon-div'>
                        <CheckCircleIcon />
                        <Typography className='title'>Sukces!</Typography>
                    </div>
                    <Button variant='outlined' onClick={ () => props.closeRequest()}>
                        Zamknij okno
                    </Button>
                </div>
            )
        }
    });

    return (
        <Modal
            open={props.open}
            style={{display: 'flex', justifyContent: 'center'}}
            >
            {renderModalContent}
        </Modal>
    )
};


export default PaymentModal;