// eslint-disable-next-line
import axios from "axios";
import { oraclexddd } from "../../components/sql-dev/oracleFetch";
import { 
    REQUEST_PRODUCTS, 
    RECEIVE_PRODUCTS, 
    RECEIVE_PRODUCTS_ERROR, 
    RECEIVE_PRODUCTS_TEST
} from "../constants/productTypes"


const requestProducts = () => ({
    type: REQUEST_PRODUCTS,
})

// eslint-disable-next-line
const receiveProducts = json => ({
    type: RECEIVE_PRODUCTS,
    payload: json
})

// eslint-disable-next-line
const receiveProductsError = json => ({
    type: RECEIVE_PRODUCTS_ERROR,
    payload: json,
})

const receiveTest = () => ({
    type: RECEIVE_PRODUCTS_TEST
})

export const fetchProducts = url => dispatch => {
    //zalozenie ze w komponentach wolamy get z odpowiednim zapytaniem np ?tea ?coffee ?accessories 

    dispatch(requestProducts());

    console.log('oracle call');
    oraclexddd();
    console.log('oracle postcall');
    setTimeout( () => {
        dispatch(receiveTest());
    }, 100);
    /*return axios({
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
        })*/
}