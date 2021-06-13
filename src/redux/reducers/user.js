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
    PUSH_TEMP_ORDER,
    REQUEST_CONFIRM_ORDER,
    RECEIVE_CONFIRM_ORDER_SUCCESS,
    RECEIVE_CONFIRM_ORDER_ERROR,
} from '../constants/userTypes';

const initialState = {

    isLoggedIn: false,
    
    user: { id: "", name: "Anonim", email: ""},
    address: { name: "", city: "", postcode: "", streetAddress: "", email: "", phone: ""},
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
            date: new Date(),
        },
    ],
    isLoading: false,
    error: false,

    tempOrders: [],
    confirmOrderLoading: false,
    confirmOrderError: false,

    availableDiscounts: [
        {
            id: 0,
            title: '10% na całe zamówienie przy MWZ 100zł',
            code: 'BD2-10OFF',
            type: 'factor',
            factor: 0.1,
            minimum: 100
        },
        {
            id: 1,
            title: '50zł taniej zamówienie przy MWZ150zł',
            code: 'BD2-50PLNOFF',
            type: 'regular',
            minimum: 150.00,
            value: 50.00
        },
        {
            id: 2,
            title: 'Darmowa wysyłka',
            code: 'BD2-SHIPOFF',
            type: 'shipping',
            factor: 1.0
        }
    ]
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
        case PUSH_TEMP_ORDER:
            return {
                ...state,
                tempOrders: [...state.tempOrders, action.payload]
            }
        case REQUEST_CONFIRM_ORDER:
            return {
                ...state,
                confirmOrderLoading: true,
                confirmOrderError: false,
            }
        case RECEIVE_CONFIRM_ORDER_SUCCESS:
            const tempOrderIndex = state.tempOrders.findIndex( order => order.id === action.payload.id);

            return {
                ...state,
                confirmOrderLoading: false,
                confirmOrderError: false,
                orders: [...state.orders, action.payload],
                tempOrders: [...state.tempOrders.slice(0, tempOrderIndex), ...state.tempOrders.slice(tempOrderIndex + 1)],
            }
            
        case RECEIVE_CONFIRM_ORDER_ERROR:
            return {
                ...state,
                confirmOrderLoading: false,
                confirmOrderError: true,
            }
        default:
            return state;
    }
}
