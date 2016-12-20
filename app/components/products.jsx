import React from 'react'
import Product from './product.jsx'

let Products = ({products, handleClick}) => (
		<section>
		<h2> Our Products </h2>
		<section>
			{ products.map((product) => <Product label='Add to cart' key={product.id} {...product} handleClick={handleClick}/>
					) }			
		</section>
		</section>
		)
export default Products
