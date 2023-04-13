import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { ReactElement, createContext } from 'react';
import { Product, ProductCardProps } from '../interfaces/interfaces';

export const ProductContext = createContext({
    product: {} as Product,
    counter: 0,
    handleAdd: (value: number) => { }
})

export interface Props {
    product: Product
    children: ReactElement |ReactElement[];
    className?: string;
}

const { Provider } = ProductContext

export const ProductCard = ({ children, product, className }: Props) => {

    const { counter, handleAdd } = useProduct();

    return (
        <Provider value={{
            product,
            counter,
            handleAdd
        }}>
            <div className={`${styles.productCard} ${className}`}>
                {children}
            </div>
        </Provider>
    )
}

