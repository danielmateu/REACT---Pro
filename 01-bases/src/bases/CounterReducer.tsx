import { useReducer } from "react";


interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

const INITIAL_STATE: CounterState = {
    counter: 0,
    previous: 0,
    changes: 0
};

type CounterAction =
    | { type: 'increaseBy', payload: { value: number } }
    // | { type: 'decrement' }
    | { type: 'handleReset' };

const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

    const { counter, previous, changes } = state;

    switch (action.type) {
        case 'increaseBy':
            return {
                ...state,
                counter: counter + action.payload.value,
                changes: changes + 1,
                previous: counter
            }
        // case 'decrement':
        //     return {
        //         ...state,
        //         counter: state.counter - 1,
        //         changes: state.changes + 1,
        //         previous: state.counter
        //     }
        case 'handleReset':
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

    const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE)

    const handleReset = () => {
        dispatch({ type: 'handleReset' })
    }

    const increaseBy = (value: number) => {
        dispatch({ type: 'increaseBy', payload: { value } })
    }

    return (
        <>
            <h1>Counter Reducer {counterState.counter}</h1>
            <pre>
                {JSON.stringify(counterState, null, 2)}
            </pre>

            <button onClick={() => increaseBy(1)}>+1</button>
            <button onClick={() => increaseBy(5)}>+5</button>
            <button onClick={() => increaseBy(10)}>+10</button>
            <button onClick={handleReset}> Reset</button>
        </>
    )
}


