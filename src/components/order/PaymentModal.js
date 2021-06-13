import { LinearProgress, Modal, Typography } from '@material-ui/core';
import React from 'react';

const PaymentModal = props => {

    const renderModalContent = () => {
        //loading
        if (props.confirmOrderLoading && !props.confirmOrderError) {
            return (
                <div>
                    <LinearProgress />
                    <Typography> Proces opłaty </Typography>
                </div>
            )
        
        //error
        } else if (!props.confirmOrderLoading && props.confirmOrderError) {
            return (
                <div>
                    <Typography>error</Typography>
                </div>
            )
        
        //success or unknown
        } else {
            return (
                <div>
                    <Typography>sukces!</Typography>
                </div>
            )
        }
    }
    return (
        <Modal
            open={props.open}
            // onClose={props.onClose}
            >
            {renderModalContent()}
        </Modal>
    )
}


export default PaymentModal;