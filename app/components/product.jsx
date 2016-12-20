import React from 'react'
/*let Product = ({id,name,cost, handleClick, label}) => (
		<div>
		<p>{name}</p>
		{name} {cost} <button onClick={() => handleClick(id)}> {label} </button>
		</div>
		)
*/
export default class Product extends React.Component {
	componentDidMount() {
		console.log('component did mount')
	}
	render() {
		let {id,name, cost, handleClick, label} = this.props
	        return(
				<div>
				<p>{name}</p>
		{name} {cost} <button onClick={() => handleClick(id)}> {label} </button>
				</div>
		)
	}
}
