import { combineReducers } from "redux";
import { productReducer } from "./products";
import { userReducer } from "./user";

export default combineReducers({
    productReducer,
    userReducer
});