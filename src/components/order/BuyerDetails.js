import { Button, TextField, Typography } from '@material-ui/core';
import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { setAddress } from '../../redux/actions/userActions';

import './BuyerDetails.css';

const BuyerDetails = props => {

    // defaultValue={props.user.name}
    const nameRef = useRef();
    const nameLabel = 'Imię i Nazwisko';

    const streetRef = useRef();
    const streetLabel = 'Ulica';

    const postcodeRef = useRef();
    const postcodeLabel = 'Kod pocztowy';

    const cityRef = useRef();
    const cityLabel = 'Miejscowość';

    const mailRef = useRef();
    const emailLabel = 'Adres e-mail';

    const phoneRef = useRef();
    const phoneLabel = 'Numer telefonu';

    // const defaultAddress = `${props.address.street}${props.address.streetNo ? ' ' + props.address.streetNo : ''}${props.address.houseNo ? '/' + props.address.houseNo : ''}`;
    const saveAddress = () => {
        console.log(nameRef);
        props.setAddress(nameRef.current.value, cityRef.current.value, postcodeRef.current.value, streetRef.current.value, mailRef.current.value, phoneRef.current.value);
    }
    console.log('buyerdetails props', props);
    return (
        <div className='buyerdetails-container'>

            <TextField inputRef={nameRef} required id='name' label={nameLabel} defaultValue={props.user.name}/> 
            <TextField inputRef={cityRef} required id='city' label={cityLabel} defaultValue={props.address.city}/> 
            <TextField inputRef={postcodeRef} required id='post-code' label={postcodeLabel} defaultValue={props.address.postcode}/> 
            <TextField inputRef={streetRef} required id='street' label={streetLabel} defaultValue={props.address.streetAddress}/> 
            <TextField inputRef={mailRef} required id='email' label={emailLabel} defaultValue={props.address.email}/> 
            <TextField inputRef={phoneRef} required id='phone' label={phoneLabel} defaultValue={props.address.phone}/> 

            <div className='bottom'>
                <Button onClick={() => saveAddress()}>
                    Zapisz dane na przyszłe zakupy
                </Button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user,
        address: state.userReducer.address,
    }
}


export default connect(mapStateToProps, {setAddress})(BuyerDetails);