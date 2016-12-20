import React from 'react'
import sinon from 'sinon'
import {shallow} from 'enzyme'
import {expect} from 'chai'
import AddProduct from '../../app/components/AddProduct.jsx'

describe('<AddProduct />', () => {
		it('responds to click events', () =>{
				let handleClick = sinon.spy() 
				let wrapper = shallow(<AddProduct handleClick={handleClick}/>)
				wrapper.find('button').simulate('click')
				expect(handleClick.calledOnce).to.eql(true)
				})
		})
