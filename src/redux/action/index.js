import axios from "axios"
import { DECREMENT, DECREMENTBYAMOUNT, FETCHREQSUCCESS, FETCHREQUEST, FETCH_PRODUCTS, INCREMENT, INCREMENTBYAMOUNT } from "../actionType.js"
//import api from "../api.js"

export const increment = () => {
    return {
        type: INCREMENT,
    }
}

export const decrement = () => {
    return {
        type: DECREMENT, 
    }
}

export const incrementbyamount = (amount) => {
    return {
        type: INCREMENTBYAMOUNT, 
        payload: amount
    }
}
export const decrementbyamount = (amount) => {
    return {
        type: DECREMENTBYAMOUNT, 
        payload: amount
    }
}

export const fetchrequest = () => {
    return {
        type: FETCHREQUEST, 
    }
}

export const fetchrequestSuccess = (user) => {
    return {
        type: FETCHREQSUCCESS,
        payload: user 
    }
}

export const fetchrequestFailure = (error) => {
    return {
        type: FETCHREQUEST, 
        payload: error
    }
}

export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchrequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
            const users = res.data
            dispatch(fetchrequestSuccess(users))
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchrequestFailure(errorMsg))
        })
    }
}

export const fetchGroceriesSuccess = (data) => {
    return{
        type: FETCH_PRODUCTS, 
        payload: data
    }
}

export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await axios.get('https://fakestoreapi.com/products')
        dispatch(fetchGroceriesSuccess(response.data))
    } catch (error) {
        console.log(error);
    }
}

