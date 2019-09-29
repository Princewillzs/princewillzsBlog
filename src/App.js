import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Component/Layout/Navbar';
import Footer from './Component/Layout/Footer';

// import react-router-dom
import { Switch, Route } from 'react-router-dom';
// import pages
import Home from './Component/Pages/Home';
import Posts from './Component/Pages/Posts';
import Contact from './Component/Pages/Contact';
import PageError from './Component/Pages/PageError';

function App() {
	return (
		<div>
			<Navbar />
			<switch>
				<Route exact path="/" component={Home} />
				<Route path="/posts" component={Posts} />
				<Route path="/contact" component={Contact} />
				<Route path="/pageerror" component={PageError} />
			</switch>
			<Footer />
		</div>
	);
}

export default App;

// Challenges

// 1. Unable to put img folder in the public folder and use once instead of importing single images
// 2. styled-component in navbar, targeting a:hover
