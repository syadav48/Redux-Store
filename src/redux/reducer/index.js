import { DECREMENT, DECREMENTBYAMOUNT, FETCHREQFAILURE, FETCHREQSUCCESS, FETCHREQUEST, INCREMENT, INCREMENTBYAMOUNT } from "../actionType.js";


const initialAmount = {
    value: 0
}

const initialState = {
    loading: false, 
    users: [],
    error: ''
}



export const reducer = (state= initialAmount, action) => {
    switch (action.type) {
        case INCREMENT :
            return {...state, value: state.value + 1}
            
        case DECREMENT :
                return {...state, value: state.value - 1}
            
        case INCREMENTBYAMOUNT: 
            return {...state, value: state.value + action.payload}
        
        case DECREMENTBYAMOUNT: 
            return {...state, value: state.value - action.payload}
        default:
            return state
    }
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHREQUEST:
            return {...state, loading: true}
        case FETCHREQSUCCESS: 
            return { ...state, 
                loading: false, 
                users: action.payload,
                error: ''     
            }
        case FETCHREQFAILURE: 
            return {
                ...state, 
                loading: false, 
                users: [],
                error: action.payload
            }    
        default:
        return state
    }
}

