import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
} from '../constants/cartTypes';


const initialState = {
    cartItems: [],
    // isLoading: false,
    // error: false,
}



export const cartReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_TO_CART:
            return {
                ...state,
                cartItems: [...cartItems, action.payload],
            }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: [
                    ...cartItems.slice(0, action.payload),
                    ...cartItems.slice(action.payload+1)
                ]
            }
        // case types.ADD_TO_CART_REQUEST:
        //     return {
        //         ...state,
        //         isLoading: true,
        //         error: false,
        //     }
        // case types.ADD_TO_CART_SUCCESS:
        //     return {
        //         ...state,
        //         cartItems: [...cartItems, action.payload],
        //         isLoading: false,
        //         error: false,
        //     }
        // case types.ADD_TO_CART_ERROR:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         error: true,
        //     }
        // case types.REMOVE_FROM_CART_REQUEST:
        //     return {
        //         ...state,
        //         isLoading: true,
        //         error: false,
        //     }
        // case types.REMOVE_FROM_CART_SUCCESS:
        //     return {
        //         ...state,
        //         cartItems: action.payload, //możnaby tu slice'ować po indeksie zamiast tego!!!
        //         isLoading: false,
        //         error: false,
        //     }
        // case types.REMOVE_FROM_CART_ERROR:
        //     return {
        //         ...state,
        //         isLoading: false,
        //         error: true,
        //     }
        // case types.REQUEST_CART:
        //     return {
        //         ...state,
        //         cart: [],
        //         isLoading: true,
        //         error: false,
        //     }
        // case types.RECEIVE_CART_SUCCESS:
        //     return {
        //         ...state,
        //         cart: action.payload,
        //         isLoading: false,
        //         error: false,
        //     }
        // case types.RECEIVE_CART_ERROR:
        //     return {
        //         ...state,
        //         cart: [],
        //         isLoading: false,
        //         error: true,
        //     }
        
        default:
            return state;
    }
}