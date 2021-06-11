import { Snackbar } from '@material-ui/core'
import React from 'react'



const WishlistToast = props => {

    return (
        <Snackbar 
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center'
            }}
            open={props.open === props.type ? true : false} 
            autoHideDuration={2000} 
            onClose={props.onClose}
            message={props.text}
        />
    )
}


export default WishlistToast;

