import { gsap } from "gsap";
import { useEffect, useState } from "react";


const MAXIMUN_COUNT = 10;

export const CounterEffect = () => {

    const [counter, setCounter] = useState(5);

    useEffect(() => {
        // console.log('UseEffect');
        if(counter < 10) return
        
        console.log('%cSe llegó a 10', 'color: green; background-color: black; font-size: 20px; font-weight: bold;');
        gsap.to('h2', { duration: 1, color: 'red', y: -10,ease: 'ease.out'  }).then(() => {
            gsap.to('h2', { duration: 1, y: 0, ease: 'bounce.out' });
        });
    }, [counter])
    

    const handleCLick = () => {
        // if MAXIMUN_COUNT => console.log('Se llegó a 10') and stop
        // if(counter >= MAXIMUN_COUNT) return console.log('Se llegó a 10');
        setCounter(prev => Math.min(prev + 1, MAXIMUN_COUNT));
    }

    return (
        <>
            <h1>Counter Effect:</h1>
            <h2>{counter}</h2>

            <button onClick={handleCLick}>+1</button>
        </>
    )
}
