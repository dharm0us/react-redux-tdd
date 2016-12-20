import React from 'react'
import {expect} from 'chai'
import {shallow} from 'enzyme'
import Product from '../../app/components/Product.jsx'

describe('<Product />', () => {
		it('should contain one div tag', () =>{
				let wrapper = shallow(<Product />)
				expect( wrapper.find('div')).to.have.length(1)
				})
		it('should render a product name', () =>{
				let testName = 'lorem ip sum'
				let wrapper = shallow(<Product name={testName}/>)
				expect( wrapper.find('p').text()).to.eql(testName)
				})
		})
