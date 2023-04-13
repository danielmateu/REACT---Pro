import { useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css';

interface Props {
    className?: string

}


export const ProductButtons = ({className}: Props) => {

    const { counter, handleAdd } = useContext(ProductContext)

    return (
        <div className={`${styles.buttonsContainer} ${className}`}>
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