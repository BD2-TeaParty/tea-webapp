import { 
    ADD_TO_CART, 
    REMOVE_FROM_CART 
} from "../constants/cartTypes"



export const addItem = item => dispatch => {

    dispatch({ type: ADD_TO_CART, payload: item })
}

export const removeItem = itemIndex => dispatch => {

    dispatch({ type: REMOVE_FROM_CART, payload: itemIndex})
}