import {IndexRoute, Route, Router, browserHistory} from 'react-router'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import {createStore} from 'redux'
import reducer from './reducer'
import {Provider} from 'react-redux'

let store = createStore(reducer)

ReactDOM.render(
		<Provider store={store}>
			<App/>
		</Provider>
		, document.getElementById('app'));

