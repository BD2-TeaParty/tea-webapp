import { LOGOUT, SET_ADDRESS, REMOVE_ADDRESS, LOGIN_SUCCESS, LOGIN_ERROR, REQUEST_ORDERS, REQUEST_LOGIN, RECEIVE_ORDERS, RECEIVE_ORDERS_ERROR } from '../constants/actionTypes';

const initialState = {
    user: { id: "", name: ""},
    address: { city: "", street: "", streetNo: "", houseNo: ""},
    userLoading: false,
    userError: false,

    orders: [],
    ordersLoading: false,
    ordersError: false,
}


export const userReducer = (state = initialState, action) => {
    
    switch(action.type) {

        case REQUEST_LOGIN:
            return {
                ...state,
                userLoading: true,
                userError: false,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: action.payload,
                userLoading: false,
                userError: false
            }
        case LOGIN_ERROR:
            return {
                ...state,
                userLoading: false,
                userError: true,
            }
        case LOGOUT:
            return initialState;

        case REQUEST_ORDERS:
            return {
                ...state,
                ordersLoading: true,
                ordersError: false,
            }
        case RECEIVE_ORDERS:
            return {
                ...state,
                orders: action.payload,
                ordersLoading: false,
                ordersError: false,
            }
        case RECEIVE_ORDERS_ERROR:
            return {
                ...state,
                ordersLoading: false,
                ordersError: true,
            }

        case SET_ADDRESS:
            return {
                ...state,
                address: action.payload,
            }

        case REMOVE_ADDRESS:
            return {
                ...state,
                address: initialState.address
            }
    }
}
