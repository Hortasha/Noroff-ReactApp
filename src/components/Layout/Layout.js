import React from 'react';
import './Layout.css';
import { NavLink } from 'react-router-dom';

const layout = props => (
	<React.Fragment>
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<NavLink className="navbar-brand" to="/">Rick & Morty</NavLink>
			<ul className="navbar-nav">
				<li className="nav-item">
					<NavLink to="/" className="nav-link">Characters</NavLink>
				</li>
			</ul>
		</nav>
		<header>
			<img src="https://i2.wp.com/www.pixelcrumb.com/wp-content/uploads/2016/10/RICK-AND-MORTY-BANNER.jpg?fit=1920%2C720" alt="Rick header" className="header--img" />
		</header>
		<div className="container">
			{props.children}
		</div>
	</React.Fragment>
)


export default layout;