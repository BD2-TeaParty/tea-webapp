import * as types from '../constants/actionTypes';


const initialState = {
    isLoading: false,
    data: [],
    error: false,
}

export const productReducer = (state = initialState, action) => {

    switch (action.type) {
        
        case types.REQUEST_PRODUCTS:
            return {
                ...state,
                isLoading: true,
                error: false
            }
        case types.RECEIVE_PRODUCTS:
            return {
                ...state,
                isLoading: false,
                data: action.payload,
                error: false,
            }
        case types.RECEIVE_PRODUCTS_ERROR: 
            return {
                ...state,
                isLoading: false,
                error: true,
            }
        default:
            return state;
    }
}
