import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Navbar() {
	return (
		<Nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<Link className="navbar-brand text-white ml-5" to="/">
				PrincewillzsBlog
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarSupportedContent"
				aria-controls="navbarSupportedContent"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon" />
			</button>

			<div className="collapse navbar-collapse" id="navbarSupportedContent">
				<ul className="navbar-nav m-auto">
					<li className="nav-item active">
						<Link className="nav-link text-white text-uppercase ml-5" to="/">
							Home <span class="sr-only">(current)</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-white text-uppercase ml-5" to="/posts">
							posts
						</Link>
					</li>
					<li className="nav-item">
						<Link className="nav-link text-white text-uppercase ml-5" to="/contact">
							contact us
						</Link>
					</li>
				</ul>
				<form className="form-inline my-2 my-lg-0">
					<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-primary my-2 my-sm-0" type="submit">
						Search
					</button>
				</form>
			</div>
		</Nav>
	);
}

export default Navbar;

const Nav = styled.div`
	.nav-link Link:hover {
		color: "red";
	}
`;
