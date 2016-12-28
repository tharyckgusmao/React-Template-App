import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Main from './components/Main.js';

const router = (

	<Router history={browserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={Main}></IndexRoute>
		</Route>
	</Router>
	)



ReactDom.render(router, document.getElementById('root'));