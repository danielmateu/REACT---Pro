import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css';

import { CSSProperties, ReactElement, createContext } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';

export const ProductContext = createContext({
    product: {} as Product,
    counter: 0,
    handleAdd: (value: number) => { }
})

export interface Props {
    product: Product
    children: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: (args: onChangeArgs) => void;
    value?: number;
    count?: number;
}

const { Provider } = ProductContext

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {

    const { counter, handleAdd } = useProduct({ onChange, product, value });

    return (
        <Provider value={{
            product,
            counter,
            handleAdd
        }}>
            <div
                className={`${styles.productCard} ${className}`}
                style={style}
            >
                {children}
            </div>
        </Provider>
    )
}

