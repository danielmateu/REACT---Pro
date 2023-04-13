import { CSSProperties, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css';

export interface Props {
    className?: string;
    style?: CSSProperties;
}


export const ProductButtons = ({ className, style }: Props) => {

    const { counter, handleAdd } = useContext(ProductContext)

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
                className={styles.buttonAdd}
                onClick={() => handleAdd(1)}>+</button>
        </div>
    )
}