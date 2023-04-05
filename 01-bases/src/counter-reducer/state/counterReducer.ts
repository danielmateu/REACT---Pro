import { CounterAction } from "../actions/actions";
import { CounterState } from "../interfaces/interfaces";

export const counterReducer = (state: CounterState, action: CounterAction): CounterState => {

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