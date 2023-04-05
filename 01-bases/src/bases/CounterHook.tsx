
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../hooks/useCounter";




export const Counterhook = () => {

    const { counter, handleClick, counterElement } = useCounter()

    return (
        <>
            <h1>Counter Hook:</h1>
            <h2 ref={counterElement}>{counter}</h2>

            <button onClick={handleClick}>+1</button>
        </>
    )
}
