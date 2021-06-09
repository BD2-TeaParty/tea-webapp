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
    REQUEST_REGISTER,
    REGISTER_SUCCESS,
    REGISTER_ERROR,
    REMOVE_FROM_WISHLIST,
    ADD_TO_WISHLIST,
} from '../constants/userTypes';

const initialState = {

    isLoggedIn: false,
    
    user: { id: "", name: "Anonim"},
    address: { city: "", street: "", streetNo: "", houseNo: ""},
    userLoading: false,
    userError: false,
    errorMessage: '',

    orders: [],
    ordersLoading: false,
    ordersError: false,

    wishlist: [
        {
            id: 123, //id pozwala oberjzec przedmiot pod adresem typu teashop.pl/products?id=12387481762
            title: 'sadfas',
            description: 'ahfhafdahfd',
            img: 'https://static.biotea.it/1593-large_default/display-foglie-te-in-bambu.jpg',
            price: 100.0,
        },
    ],
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
                userError: false,
                errorMessage: '',
            }
        case LOGIN_ERROR:
            return {
                ...state,
                userLoading: false,
                userError: true,
                errorMessage: action.payload
            }
        case LOGOUT:
            return initialState;
        case REQUEST_REGISTER:
            return {
                ...state,
                userLoading: true,
                userError: false,
                errorMessage: ''
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                userLoading: false,
                userError: false,
                errorMessage: ''
            }
        case REGISTER_ERROR: 
        return {
            ...state,
            userLoading: false,
            userError: true,
            errorMessage: action.payload,
        }
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
                errorMessage: '',
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
        case ADD_TO_WISHLIST:
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload]
            }
        case REMOVE_FROM_WISHLIST: 
            return {
                ...state,
                wishlist: [...state.wishlist.slice(0, action.payload), ...state.wishlist.slice(action.payload + 1)]
            }
        default:
            return state;
    }
}
