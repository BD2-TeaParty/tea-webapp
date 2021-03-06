import {
    ADD_TO_CART,
    CLEAR_CART,
    DECREASE_QUANTITY,
    INCREASE_QUANTITY,
    REMOVE_FROM_CART,
} from '../constants/cartTypes';
import { RECEIVE_CONFIRM_ORDER_SUCCESS } from '../constants/userTypes';


const initialState = {
    cartItems: [],
    // isLoading: false,
    // error: false,
}



export const cartReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_TO_CART: {
            const index = state.cartItems.findIndex( cartObj => cartObj.item.id === action.payload.id);

            if (index === -1) {
                return {
                    ...state,
                    cartItems: [...state.cartItems, {item: action.payload, quantity: 1}],
                }    
            } else {
                return {
                    ...state,
                    cartItems: state.cartItems.map((item, i) =>
                        index === i
                        ? { ...item, quantity: item.quantity + 1}
                        : item) 
                }
            }
        }
        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: [
                    ...state.cartItems.slice(0, action.payload),
                    ...state.cartItems.slice(action.payload+1)
                ]
            }
        case INCREASE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map( (item, i) =>
                        action.payload === i
                        ? {...item, quantity: item.quantity + 1 }
                        : item)
            }
        case DECREASE_QUANTITY:
            return {
                ...state,
                cartItems: state.cartItems.map((item, i) =>
                        action.payload === i
                        ? { ...item, quantity: item.quantity - 1}
                        : item) 
            }
        case RECEIVE_CONFIRM_ORDER_SUCCESS:
            return initialState;
        case CLEAR_CART:
            return initialState;
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
        //         cartItems: action.payload, //mo??naby tu slice'owa?? po indeksie zamiast tego!!!
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