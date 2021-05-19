import axios from "axios";
import { 
    REQUEST_PRODUCTS, 
    RECEIVE_PRODUCTS, 
    RECEIVE_PRODUCTS_ERROR 
} from "../constants/actionTypes"


const requestProducts = () => ({
    type: REQUEST_PRODUCTS,
})

const receiveProducts = json => ({
    type: RECEIVE_PRODUCTS,
    payload: json
})

const receiveProductsError = json => ({
    type: RECEIVE_PRODUCTS_ERROR,
    payload: json,
})

export const fetchProducts = url => dispatch => {
    //zalozenie ze w komponentach wolamy get z odpowiednim zapytaniem np ?tea ?coffee ?accessories 

    dispatch(requestProducts);
    
    return axios({
        url: url,
        timeout: 10000,
        method: 'GET',
        responseType: 'json'
        })

        .then( response => {
            console.log('Got products:', response);
            dispatch(receiveProducts(response.data));
        })

        .catch( response => {
            console.log('Got products error:', response);
            dispatch(receiveProductsError(response.data));
        })
}