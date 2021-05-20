import { LOGOUT, 
    SET_ADDRESS, 
    REMOVE_ADDRESS, 
    REQUEST_LOGIN,
    LOGIN_SUCCESS, 
    LOGIN_ERROR, 
    REQUEST_ORDERS, 
    RECEIVE_ORDERS, 
    RECEIVE_ORDERS_ERROR,
    REQUEST_WISHLIST,
    RECEIVE_WISHLIST, 
    RECEIVE_WISHLIST_ERROR,
} from '../constants/userTypes';

const initialState = {
    user: { id: "", name: ""},
    address: { city: "", street: "", streetNo: "", houseNo: ""},
    userLoading: false,
    userError: false,

    orders: [],
    ordersLoading: false,
    ordersError: false,

    wishlist: [],
    isLoading: false,
    error: false,
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
        case REQUEST_WISHLIST:
            return {
                ...state,
                wishlist: [],
                isLoading: true,
                error: false
            }
        case RECEIVE_WISHLIST: 
            return {
                ...state,
                wishlist: action.payload,
                isLoading: false,
                error: false
            }
        case RECEIVE_WISHLIST_ERROR:
            return {
                ...state,
                wishlist: [],
                isLoading: false,
                error: true,
            }
        default:
            return state;
    }
}
