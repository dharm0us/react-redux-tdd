import {INCREMENT_COUNT} from '../components/constants/actionTypes.js'

function addToCart(id) {
return{
	type: 'ADD_TO_CART',
	payload: id 
}
}
export {addToCart}
