
import { products } from '../data/products'
import { ProductCard } from './ProductCard'
import { ProductImage } from './ProductImage'
import { ProductTitle } from './ProductTitle'
import { ProductButtons } from './ProductButtons'
import { useShoppingCart } from '../hooks/useShoppingCart'

export const Products = () => {

    const { shoppingCard, onProductCountChange } = useShoppingCart()
    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
        }}
        >
            {
                products.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        className='bg-dark text-white'
                        value={shoppingCard[product.id]?.count || 0}
                        onChange={onProductCountChange}
                    >
                        <ProductImage className='custom-image' />
                        <ProductTitle className='text-white text-bold' />
                        <ProductButtons
                            className='custom-buttons'
                        />
                    </ProductCard>
                ))
            }

        </div>
    )
}
