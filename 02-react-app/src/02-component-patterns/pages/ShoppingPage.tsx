import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"



const product = {
    id: '1',
    title: 'Coffee Mug - card',
    img: './coffee-mug.png',
}


const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
            }}
            >
                <ProductCard product={product} >
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
                
                <ProductCard product={product} >
                    <ProductCard.Image />
                    <ProductCard.Title title={'Café'} />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product} >
                    <ProductCard.Image />
                    <ProductCard.Title title={'Café Baratuno'} />
                    <ProductCard.Buttons />
                </ProductCard>
            </div>
        </div>
    )
}

export default ShoppingPage