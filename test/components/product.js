import {expect} from 'chai'
import {shallow} from 'enzyme'
import React from 'react'
import Product from '../../app/components/Product.jsx'

describe('<Product />', () => {
		it('should contain one div tag', () =>{
				let wrapper = shallow(<Product />)
				expect( wrapper.find('div')).to.have.length(1)
				})
		})
