import { CSSProperties, useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    style?: CSSProperties;
}


export const ProductButtons = ({ className, style }: Props) => {
    // Todo: MaxCount
    const { counter, handleAdd, maxCount } = useContext(ProductContext)
    // console.log(maxCount);

    // True si counter === maxCount
    // False si no lo es
    // Todo isMaxReached = useCallback, dependencias [counter, maxCount]
    const isMaxReached = () => !!maxCount && counter === maxCount
    // const isMaxReached = useCallback(() => () => !!maxCount && counter === maxCount, [counter, maxCount] )

    return (
        <div
            style={style}
            className={`${styles.buttonsContainer} ${className}`}>
            <button
                className={styles.buttonMinus}
                onClick={() => handleAdd(-1)}>-</button>

            <div
                className={styles.countLabel}
            >{counter}</div>

            <button
                // if isMaxReached is true, then add the disabled class
                className={`${styles.buttonAdd} ${isMaxReached() ? styles.disabled : ''}`}
                // className={`${styles.buttonAdd} ${counter === maxCount ? styles.disabled : ''}`}
                // className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
                onClick={() => handleAdd(1)}>+</button>
        </div>
    )
}