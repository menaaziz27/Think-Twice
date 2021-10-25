import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';
import Header from './components/Header/Header';
import './App.css';
import useStyles from './style';

function App() {
	const classes = useStyles();

	return (
		<Router>
			<Header />
			<Container maxWidth="lg" className={classes.container}>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/auth" exact component={Auth} />
				</Switch>
			</Container>
		</Router>
	);
}

export default App;
