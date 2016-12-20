import {expect} from 'chai'
import shoppingCart from '../../app/reducer/shoppingCart'


describe('shoppingCart reducer', () => {
   it('can add new products', () => {
       expect(
          shoppingCart([], {type: 'ADD_TO_CART' ,payload: 22})
       ).to.eql([22])
   })
})
