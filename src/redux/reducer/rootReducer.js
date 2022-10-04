
import { combineReducers } from "redux";
import  { productReducer, reducer, userReducer } from ".";


const rootReducer = combineReducers({
    amountReducer: reducer,
    user: userReducer,
    products: productReducer
})

export default rootReducer