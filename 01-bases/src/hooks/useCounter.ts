import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";


export const useCounter = (maxCount = 10) => {

    const [counter, setCounter] = useState(5);
    const elementToAnimate = useRef<HTMLHeadingElement>(null);

    const tl = useRef(gsap.timeline());

    const handleClick = () => {
        setCounter(prev => Math.min(prev + 1 , maxCount));
    }

    useLayoutEffect(() => {
        if (!elementToAnimate.current) return
        tl.current.to(elementToAnimate.current, { duration: .5, color: 'red', y: -10, ease: 'ease.out' })
            .to(elementToAnimate.current, { duration: .5, color: 'white', y: 0, ease: 'bounce.out' })
            // .pause();
    }, [counter])

    // useEffect(() => {
    //     tl.current.play(0);
    // }, [counter])

    return {
        counter,
        elementToAnimate,
        handleClick
    }
}
