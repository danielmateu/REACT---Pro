import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { CSSProperties, ReactElement, createContext } from 'react';
import { Product, ProductCardHandlers, initialValues, onChangeArgs } from '../interfaces/interfaces';

export const ProductContext = createContext({
    product: {} as Product,
    counter: 0,
    maxCount: 100,
    handleAdd: (value: number) => { }
})

export interface Props {
    product: Product
    children: (args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    initialValues?: initialValues;
    maxCount?: number;
}

const { Provider } = ProductContext

export const ProductCard = ({ children, product, className, style, onChange, value, initialValues }: Props) => {

    const { 
        counter, 
        handleAdd, 
        // maxCount, 
        maxCount,
        reset,
        isMaxCountReached } = useProduct({ onChange, product, value, initialValues })
        
        ;

    return (
        <Provider value={{
            product,
            counter,
            handleAdd,
            maxCount,
            reset,
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {
                children({
                    count: counter,
                    isMaxCountReached,
                    maxCount: initialValues?.maxCount || 10,
                    product,

                    handleAdd,
                    reset,
                    })}
            </div>
        </Provider>
    )
}

