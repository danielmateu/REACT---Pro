import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styless.css'


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
                <ProductCard product={product} className='bg-dark text-white' >
                    <ProductImage className='custom-image'/>
                    <ProductTitle className='text-white text-bold' />
                    <ProductButtons className='custom-buttons'/>
                </ProductCard>

                <ProductCard product={product} className='bg-dark text-white' >
                    <ProductCard.Image className='custom-image' />
                    <ProductCard.Title title={'Café'} className='text-white text-bold' />
                    <ProductCard.Buttons className='custom-buttons' />
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