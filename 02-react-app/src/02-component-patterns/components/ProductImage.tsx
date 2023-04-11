import { useContext } from "react";
import { ProductContextProps } from '../interfaces/interfaces';
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';


export const ProductImage = ({ img = '' }) => {

    const { product } = useContext(ProductContext)

    // If there is no image, show the noImage image
    const imgToShow = img ? img : product.img ? product.img : noImage;

    return (
        <img src={imgToShow} alt="Product image" className={styles.productImg} />
    )
}