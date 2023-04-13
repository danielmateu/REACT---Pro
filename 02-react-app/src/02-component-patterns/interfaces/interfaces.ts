// import { ReactElement } from "react";
import { Props as ProductButtonProps } from "../components/ProductButtons";
import { Props as ProductCardPrps } from "../components/ProductCard";
import { Props as ProductImageProps } from "../components/ProductImage";
import { Props as ProductTitleProps } from "../components/ProductTitle";

// export interface ProductCardProps {
//     product: Product;
//     children?: ReactElement | ReactElement[];
// }

export interface Product {
    id: string;
    title: string;
    img?: string;
    count?: number;

}

export interface ProductButtonsProps {
    counter: number;
    handleAdd: (value: number) => void;
}

export interface ProductContextProps {
    counter: number;
    product: Product;
    handleAdd: (value: number) => void;
}

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardPrps): JSX.Element,
    Buttons: (Props: ProductButtonProps) => JSX.Element
    Image: (Props: ProductImageProps) => JSX.Element,
    Title: (Props: ProductTitleProps) => JSX.Element,

}

export interface onChangeArgs {
    product: Product;
    count: number
}


export interface ProductInCart extends Product {
    count: number
}

export interface initialValues {
    count: number;
    maxCount: number;
} 