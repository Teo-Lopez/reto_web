import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../pages/Home/Index'
import PhoneDetails from '../pages/Details/Index'
function Routes() {
	return (
		<Switch>
			<Route exact path='/' component={Home} />
			<Route path='/details/:id' component={PhoneDetails} />
		</Switch>
	)
}

export default Routes
