import React from 'react'
import {expect} from 'chai'
import sinon from 'sinon'
import {shallow, mount} from 'enzyme'
import Product from '../../app/components/Product.jsx'

describe('<Product />', () => {
		it('will call componentDidMount', () =>{
				sinon.spy(Product.prototype, 'componentDidMount')
				let wrapper = mount(<Product />)
			expect(Product.prototype.componentDidMount).to.have.property('callCount',1)
			Product.prototype.componentDidMount.restore()
				})
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
