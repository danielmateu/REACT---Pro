import { useReducer } from "react";

interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

const INITIAL_STATE: CounterState = {
    counter: 10,
    previous: 0,
    changes: 0
};

type CounterAction =
    | { type: 'increment', payload: { value: number } }
    | { type: 'decrement' }
    | { type: 'reset' };

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

    switch (action.type) {
        case 'increment':
            return {
                ...state,
                counter: state.counter + 1,
                changes: state.changes + 1,
                previous: state.counter
            }
        case 'decrement':
            return {
                ...state,
                counter: state.counter - 1,
                changes: state.changes + 1,
                previous: state.counter
            }
        case 'reset':
            return {
                ...state,
                counter: 0,
                changes: 0,
                previous: 0
            }
        default:
            return state;
    }
}

export const CounterReducerComponent = () => {

    const [{ counter }, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleClick = () => {
        dispatch({ type: 'reset' })
    }

    return (
        <>
            <h1>Counter Reducer: {counter}</h1>

            <button
                onClick={handleClick}
            >Reset</button>
        </>
    )
}


