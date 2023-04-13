import { useState } from "react"
import { Product, ProductInCart } from "../interfaces/interfaces"
import { products } from "../data/products"



export const useShoppingCart = () => {
    const [shoppingCard, setShoppingCard] = useState<{ [key: string]: ProductInCart }>({
        // 'ID1': { ...product1, count: 10 },
        // 'ID2': { ...product2, count: 5 },
    })

    const onProductCountChange = ({ count, product }: { count: number, product: Product }) => {
        console.log('onProductCountChange', count, product)
        setShoppingCard(oldShoppingCard => {
            // Borrar el producto del carrito

            if (count === 0) {
                const newShoppingCard = { ...oldShoppingCard }
                delete newShoppingCard[product.id]
                return newShoppingCard
            }

            return {
                ...oldShoppingCard,
                [product.id]: {
                    ...product,
                    count
                }
            }
        })
    }

    return {
        // products,
        shoppingCard,

        onProductCountChange
    }
}
