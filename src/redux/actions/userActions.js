import axios from 'axios';
import { LOGIN_ENDPOINT, NEW_ORDER_ENDPOINT, ORDERS_ENDPOINT, REGISTER_ENDPOINT, WISHLIST_ENDPOINT } from '../../util/ApiLinks';
import { 
    REQUEST_LOGIN, 
    LOGIN_SUCCESS, 
    LOGIN_ERROR, 
    REQUEST_REGISTER,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    LOGOUT, 
    REQUEST_ORDERS,
    RECEIVE_ORDERS,
    RECEIVE_ORDERS_ERROR,
    REQUEST_WISHLIST,
    RECEIVE_WISHLIST,
    RECEIVE_WISHLIST_ERROR,
    ADD_TO_WISHLIST,
    REMOVE_FROM_WISHLIST,
    PUSH_TEMP_ORDER,
    SET_ADDRESS,
    REQUEST_CONFIRM_ORDER,
    RECEIVE_CONFIRM_ORDER_SUCCESS,
    RECEIVE_CONFIRM_ORDER_ERROR,
} from '../constants/userTypes';
import store from '../store';


const requestLogin = () => ({
    type: REQUEST_LOGIN
})


const loginSuccessful = json => ({
    type: LOGIN_SUCCESS,
    payload: json
})

const loginError = message => ({
    type: LOGIN_ERROR,
    payload: message
})

const logout = () => ({
    type: LOGOUT
})

const requestRegister = ()=> ({
    type: REQUEST_REGISTER
})

const registerSuccess = json => ({
    type: REGISTER_SUCCESS,
    payload: json
})

const registerError = message => ({
    type: REGISTER_ERROR,
    payload: message
}) 

const validateUser = (username, password) => {

    const users = store.getState().userReducer.availableUsers;
    
    for( let user of users) {
        if (username === user.name && password === user.password)
            return true;
    }
    return false;
}

export const signIn = data => dispatch => {


    dispatch(requestLogin());

    //simulate api response
    setTimeout( () => {
        if (validateUser(data.user, data.password) ) {

            const user = {
                id: 0,
                name: data.user,
                email: ''
            }
            return dispatch(loginSuccessful(user));
        } else {
            return dispatch(loginError('Nieprawidłowe dane') );
        }
    }, 2000);
    // return axios({
    //     url: LOGIN_ENDPOINT,
    //     timeout: 20000,
    //     method: 'POST',
    //     data: data,
    //     responseType: 'json'
    //     })

    //     .then( response => {
    //         console.log('Got user', response);
    //         dispatch(loginSuccessful(response.data));
    //     })

    //     .catch( response => {
    //         console.log('Got user error:', response);
    //         dispatch(loginError(response.message));
    //     })
}

export const registerUser = data => dispatch => {
    dispatch(requestRegister());

    return axios({
        url: REGISTER_ENDPOINT,
        timeout: 20000,
        method: 'POST',
        data: data,
        responseType: 'json'
    })
        .then( response => {
            console.log('Got user', response);
            dispatch(registerSuccess(response.data));
        })

        .catch( response => {
            console.log('Got user error:', response);
            dispatch(registerError(response.message));
        })

}

export const signOut = () => dispatch => {
    
    console.log('logging out');
    return dispatch(logout())
}


const requestOrders = () => ({
    type: REQUEST_ORDERS
})

const receiveOrders = json => ({
    type: RECEIVE_ORDERS,
    payload: json
})

const receiveOrdersError = json => ({
    type: RECEIVE_ORDERS_ERROR,
    payload: json   
})
export const fetchOrders = () => dispatch => {


    const userID = store.getState().userReducer.user.id;
    const postJson = {
        userID: userID
    }
    dispatch(requestOrders());


    return axios({
        url: ORDERS_ENDPOINT,
        timeout: 20000,
        method: 'POST',
        data: postJson,
        responseType: 'json'
        })

        .then( response => {
            console.log('Got orders', response);
            dispatch(receiveOrders(response.data));
        })

        .catch( response => {
            console.log('Got orders error:', response);
            dispatch(receiveOrdersError(response.data));
        })
}


const requestWishlist = () => ({
    type: REQUEST_WISHLIST
})

const receiveWishlist = json => ({
    type: RECEIVE_WISHLIST,
    payload: json,
})

const receiveWishlistError = json => ({
    type: RECEIVE_WISHLIST_ERROR,
    payload: json,
})

export const fetchWishlist = () => dispatch => {

    const userID = store.getState().userReducer.user.id;
    const postJson = {
        userID: userID
    }
    dispatch(requestWishlist());


    return axios({
        url: WISHLIST_ENDPOINT,
        timeout: 20000,
        method: 'POST',
        data: postJson,
        responseType: 'json'
        })

        .then( response => {
            console.log('Got wishlist', response);
            dispatch(receiveWishlist(response.data));
        })

        .catch( response => {
            console.log('Got wishlist error:', response);
            dispatch(receiveWishlistError(response.data));
        })
}


export const addToWishlist = item => dispatch => {

    
    return dispatch({ type: ADD_TO_WISHLIST, payload: item});
}

export const removeFromWishlist = index => dispatch => {
    
    return dispatch({ type: REMOVE_FROM_WISHLIST, payload: index});
}


export const pushTempOrder = order => dispatch => {
    return dispatch({type: PUSH_TEMP_ORDER, payload: order});
}


export const setAddress = (name, city, postcode, street, email, phone) => dispatch => {

    const addressJson = {
        name: name,
        city: city,
        postcode: postcode,
        streetAddress: street,
        email: email,
        phone: phone,
    }   
    console.log('setAddress', addressJson);
    return dispatch({type: SET_ADDRESS, payload: addressJson})

}

const requestOrderConfirmation = () => ({
    type: REQUEST_CONFIRM_ORDER
})

const receiveOrderConfirmation = json => ({
    type: RECEIVE_CONFIRM_ORDER_SUCCESS,
    payload: json,
})

const receiveOrderFailure = json => ({
    type: RECEIVE_CONFIRM_ORDER_ERROR,
    payload: json,
})

export const confirmOrder = order => dispatch => {

    dispatch(requestOrderConfirmation());

    setTimeout( () => {
        dispatch(receiveOrderConfirmation(order));
    }, 5000)
    /*return axios({
        url: NEW_ORDER_ENDPOINT,
        timeout: 20000,
        method: 'POST',
        data: order,
        responseType: 'json'
        })

        .then( response => {
            console.log('Got response for new order', response);
            dispatch(receiveOrderConfirmation(response.data));
        })

        .catch( response => {
            console.log('Got error adding new order:', response);
            dispatch(receiveOrderFailure(response.data));
        })
    */

}

