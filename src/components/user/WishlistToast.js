import { Snackbar } from '@material-ui/core'
import React from 'react'



const WishlistToast = ({ open, type, onClose, text }) => {

    return (
        <Snackbar 
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }}
            open={open === type ? true : false} 
            autoHideDuration={2000} 
            onClose={onClose}
            message={text}
        />
    )
}


export default WishlistToast;

