import axios from 'axios';
import { LOGIN_ENDPOINT, ORDERS_ENDPOINT, WISHLIST_ENDPOINT } from '../../util/ApiLinks';
import { 
    REQUEST_LOGIN, 
    LOGIN_SUCCESS, 
    LOGIN_ERROR, 
    LOGOUT, 
    REQUEST_ORDERS,
    RECEIVE_ORDERS,
    RECEIVE_ORDERS_ERROR,
    REQUEST_WISHLIST,
    RECEIVE_WISHLIST,
    RECEIVE_WISHLIST_ERROR,
} from '../constants/userTypes';
import store from '../store';


const requestLogin = () => ({
    type: REQUEST_LOGIN
})


const loginSuccessful = json => ({
    type: LOGIN_SUCCESS,
    payload: json
})

const loginError = json => ({
    type: LOGIN_ERROR,
    payload: json
})

const logout = () => ({
    type: LOGOUT
})


export const signIn = data => dispatch => {


    dispatch(requestLogin);

    return axios({
        url: LOGIN_ENDPOINT,
        timeout: 20000,
        method: 'POST',
        data: data,
        responseType: 'json'
        })

        .then( response => {
            console.log('Got user', response);
            dispatch(loginSuccessful(response.data));
        })

        .catch( response => {
            console.log('Got user error:', response);
            dispatch(loginError(response.data));
        })
}

export const signOut = dispatch => {
    
    console.log('logging out');
    dispatch(logout)
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
export const fetchOrders = dispatch => {


    const userID = store.getState().userReducer.user.id;
    const postJson = {
        userID: userID
    }
    dispatch(requestOrders);


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

export const fetchWishlist = dispatch => {

    const userID = store.getState().userReducer.user.id;
    const postJson = {
        userID: userID
    }
    dispatch(requestWishlist);


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

