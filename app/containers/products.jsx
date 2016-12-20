import React from 'react'
import {connect} from 'react-redux'
import Products from '../components/products.jsx'

//state will come from store.getState()
function mapStateToProps(state) {
	return {
		products: state.products
	}
}
function mapDispatchToProps(dispatch) {
	return {
		handleClick(id) {
			dispatch({
				type: 'ADD_TO_CART',
			payload: {
				id
			}
			})
		}
	}
}

let ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products) //curry function

export default ProductsContainer

/*class Products extends Component {
	render() {
		<Products products={products}/>
	}
}
Alternative to this is to use connect as above
*/
