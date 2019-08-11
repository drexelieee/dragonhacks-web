import React from 'react'
import ReactDOM from 'react-dom'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import './theme.css'
import Landing from './landing/Landing'
import Sponsor from './forms/SponsorForm'

const routing = (
	<Router>
		<div>
			<Route exact path="/" component={ Landing } />
			<Route exact path="/sponsor" component= { Sponsor } />
		</div>
	</Router>
	)

ReactDOM.render(routing, document.getElementById('root'))
serviceWorker.unregister()
