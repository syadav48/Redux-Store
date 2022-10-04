
import { combineReducers } from "redux";
import  { reducer, userReducer } from ".";


const rootReducer = combineReducers({
    amountReducer: reducer,
    user: userReducer
})

export default rootReducer