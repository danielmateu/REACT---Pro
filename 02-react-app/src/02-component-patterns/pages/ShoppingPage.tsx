
import { products } from "../data/products";
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
// import { useShoppingCart } from "../hooks/useShoppingCart";

const product = products[0]

import '../styles/custom-styless.css'
import { json } from "react-router-dom";

const ShoppingPage = () => {

    // const { shoppingCard, onProductCountChange } = useShoppingCart()

    return (
        <main>
            <h1>ShoppingPage</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
            }}
            >
                <ProductCard
                    key={product.id}
                    product={product}
                    className='bg-dark text-white'
                    initialValues={{
                        count: 4,
                        maxCount: 10,
                    }}
                >
                    {
                        ({ reset, count, handleAdd, isMaxCountReached, maxCount }) => (
                            <>
                                <ProductImage className='custom-image' />
                                <ProductTitle className='text-white text-bold' />
                                <ProductButtons
                                    className='custom-buttons'
                                />

                                <div
                                    className='d-flex justify-content-around align-items-center'
                                >

                                    <button
                                        onClick={() => handleAdd(-2)}
                                        className='btn btn-secondary'
                                    >-2</button>
                                    {/* Si no llega al isMaxCount, ocultar */}
                                    <span>{count} - Max: {maxCount}</span>
                                    <button
                                        onClick={() => handleAdd(2)}
                                        // if isMaxCountReached is true, disable the button
                                        disabled={isMaxCountReached}
                                        className={'btn btn-primary'}
                                    >+2</button>
                                </div>
                                <div
                                    className='d-flex justify-content-around align-items-center'
                                >

                                    <button
                                        className='reset-btn btn btn-danger'
                                        onClick={reset}
                                    >
                                        Reset
                                    </button>
                                </div>


                                {/* {JSON.stringify(args, null, 3)} */}
                            </>
                        )
                    }
                </ProductCard>

            </div>
        </main>
    )
}

export default ShoppingPage