import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { createContext } from 'react';
import { Product, ProductCardProps } from '../interfaces/interfaces';

export const ProductContext = createContext({
    product: {} as Product,
    counter: 0,
    handleAdd: (value: number) => { }
})

const { Provider } = ProductContext

export const ProductCard = ({ children, product }: ProductCardProps) => {

    const { counter, handleAdd } = useProduct();

    return (
        <Provider value={{
            product,
            counter,
            handleAdd
        }}>
            <div className={styles.productCard}>
                {children}
            </div>
        </Provider>
    )
}

