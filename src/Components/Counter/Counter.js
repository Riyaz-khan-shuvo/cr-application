import React, { useReducer } from 'react';

const Counter = () => {

    const initialState = {
        count: 0
    }
    const reducer = (state, action) => {
        switch (action.type) {

            case 'INCREMENT':
                return { count: state.count + 1 };
            case 'DECREMENT':
                return { count: state.count - 1 };

            default:
                return state
        }
    };

    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h3>This is Testing purpose: {state.count}  </h3>
            <button onClick={() => dispatch({ type: 'INCREMENT' })} >Increment</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })} >Decrement</button>
        </div>
    );
};

export default Counter;