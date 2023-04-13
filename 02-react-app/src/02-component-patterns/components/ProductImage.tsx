import { useContext } from "react";
import { ProductContextProps } from '../interfaces/interfaces';
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

interface Props {
    img?: string;
    className?: string;
}

export const ProductImage = ({ img, className }: Props) => {
    const { product } = useContext(ProductContext)
    let imgToShow: string;
    // If there is no image, show the noImage image
    imgToShow = img ? img : product.img ? product.img : noImage;

    return (
        <img
            src={imgToShow}
            className={`${styles.productImg} ${className}`}
            alt="Product image"
        />
    )
}