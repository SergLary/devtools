import React from 'react'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from '/client/imports/Landing'

const App = props => (
	<BrowserRouter>
	  <Switch>
	     <Route path="/" component={ Landing } />
	  </Switch>
	</BrowserRouter>
		)

export default App

