import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import './theme.css'
import Landing from './landing/Landing'

const routing = (
	<Router>
		<div>
			<Route path="/" component={ Landing } />
		</div>
	</Router>
	)

ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister()
