import { useState } from "react";



export const CounterReducer = () => {

    const [counter, setCounter] = useState(0);

    const handleClick = () => {
        setCounter(prevValue => prevValue + 1);
    }

    return (
        <>
            <h1>Counter Reducer: {counter}</h1>

            <button
                onClick={handleClick}
            >+1</button>
        </>
    )
}
