import { combineReducers } from "redux";
import { cartReducer } from "./cart";
import { productReducer } from "./products";
import { userReducer } from "./user";

export default combineReducers({
    productReducer,
    userReducer,
    cartReducer
});