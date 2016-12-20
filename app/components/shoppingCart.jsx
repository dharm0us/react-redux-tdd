import React from 'react'
import Product from './product.jsx'

let ShoppingCart = ({products, handleClick}) => (
		<section>
		<h2> Shopping Cart </h2>
		<section>
			{ products.map((product) => <Product label='Remove from cart' key={product.id} {...product} handleClick={handleClick}/>
					) }			
		</section>
		</section>
		)
export default ShoppingCart
