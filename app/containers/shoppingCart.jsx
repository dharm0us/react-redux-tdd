import React from 'react'
import {connect} from 'react-redux'
import ShoppingCart from '../components/shoppingCart.jsx'


function getProductsInCart(products, shoppingCart) {
	return products.filter(product => shoppingCart.includes(product.id))
}

//state will come from store.getState()
function mapStateToProps(state) {
	return {
		products: getProductsInCart(state.products, state.shoppingCart)
	}
}
function mapDispatchToProps(dispatch) {
	return {
		handleClick(id) {
			dispatch({
				type: 'REMOVE_FROM_CART',
			payload: {
				id
			}
			})
		}
	}
}

let CartContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart) //curry function

export default CartContainer

/*class Products extends Component {
	render() {
		<Products products={products}/>
	}
}
Alternative to this is to use connect as above
*/
