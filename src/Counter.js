import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementbyamount, decrementbyamount } from "./redux/action";

 function Counter(props){
    
    const selector = useSelector((state) => state.amountReducer)
    
 
    const dispatch = useDispatch()
    const [count, setCount] = useState(2)

    const handleChange = (e) => {
        setCount(() => Number(e.target.value))
    }    
    return(
        <>
            <div>
                <button onClick={props.increment}>+</button>
                <h4>{selector.value}</h4>
                
                <button onClick={() => dispatch(decrement()) }>-</button>
            </div>
            <h2>{props.amount.value}</h2>
            <div>
                <input type="number" value={count} onChange={handleChange} />
                <button onClick={() => dispatch(incrementbyamount(count)) }>Add Amount</button>
                <button onClick={() => props.decrementbyamount(count)}>Deduct Amount</button>
            </div>
            
        </>
    )
}

const mapStateToProps = (state) => {
    console.log(state, "sssss");
    return {
        amount: state.amountReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        increment: () => dispatch(increment()),
        decrementbyamount: (count) => dispatch(decrementbyamount(count))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
