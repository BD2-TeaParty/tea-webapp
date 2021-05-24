import { 
    ADD_TO_CART, 
    REMOVE_FROM_CART,
    DECREASE_QUANTITY,
    INCREASE_QUANTITY, 
} from "../constants/cartTypes"



export const addItem = item => dispatch => {
    
    dispatch({ type: ADD_TO_CART, payload: item })
}

export const removeItem = itemIndex => dispatch => {

    dispatch({ type: REMOVE_FROM_CART, payload: itemIndex})
}

export const increaseItem = itemIndex => dispatch => {

    dispatch({ type: INCREASE_QUANTITY, payload: itemIndex});
}
export const decreaseItem = itemIndex => dispatch => {
    dispatch({ type: DECREASE_QUANTITY, payload: itemIndex })
}

