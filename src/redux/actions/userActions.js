import axios from 'axios';
import { LOGIN_ENDPOINT } from '../../util/ApiLinks';
import { 
    REQUEST_LOGIN, 
    LOGIN_SUCCESS, 
    LOGIN_ERROR, 
    LOGOUT 
} from '../constants/actionTypes';


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



