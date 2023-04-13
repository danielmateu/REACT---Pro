
import { products } from "../data/products";
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { useShoppingCart } from "../hooks/useShoppingCart";

import '../styles/custom-styless.css'

const ShoppingPage = () => {

    const { shoppingCard, onProductCountChange } = useShoppingCart()

    return (
        <main>
            <h1>ShoppingPage</h1>
            <hr />
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
            <div className="shopping-card">
                {
                    Object.keys(shoppingCard).length === 0 ? <div>ShoppingCard is empty</div> : <div>ShoppingCard</div>
                }
                {
                    Object.values(shoppingCard).map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className='bg-dark text-white'
                            value={product.count}
                            onChange={onProductCountChange}
                            style={
                                {
                                    width: '8em',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }
                            }

                        >
                            <ProductImage className='custom-image' />
                            <ProductButtons
                                className='custom-buttons'
                            />
                        </ProductCard>
                    ))
                }
            </div>

            {/* <div>
                <code>
                    {JSON.stringify(shoppingCard, null, 2)}
                </code>
            </div> */}
        </main>
    )
}

export default ShoppingPage