import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interfaces"
import { products } from "../data/products"



export const useShoppingCart = () => {
    const [shoppingCard, setShoppingCard] = useState<{ [key: string]: ProductInCart }>({
        // 'ID1': { ...product1, count: 10 },
        // 'ID2': { ...product2, count: 5 },
    })

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        // console.log('onProductCountChange', count, product)
        setShoppingCard(oldShoppingCard => {

            const productInCart: ProductInCart = oldShoppingCard[product.id] || { ...product, count: 0 }

            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count;
                return {
                    ...oldShoppingCard,
                    [product.id]: productInCart
                }
            }

            // Borrar el producto del carrito
            const { [product.id]: toDelete, ...rest } = oldShoppingCard
            return rest

            // if (count === 0) {
            //     const newShoppingCard = { ...oldShoppingCard }
            //     delete newShoppingCard[product.id]
            //     return newShoppingCard
            // }

            // return {
            //     ...oldShoppingCard,
            //     [product.id]: {
            //         ...product,
            //         count
            //     }
            // }
        })
    }

    return {
        // products,
        shoppingCard,

        onProductCountChange
    }
}
