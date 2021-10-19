import React from 'react';

import { Route, Switch, BrowserRouter } from 'react-router-dom';

// COMPONENTS
import Home from './Home';
import Contact from './Contact';

// STYLES
import '../Styles/App.css';

const App = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default App;
