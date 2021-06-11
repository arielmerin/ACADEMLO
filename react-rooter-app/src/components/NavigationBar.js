import React from 'react'

import {Link} from 'react-router-dom';
const NavigationBar = () =>{

	return(
		<div>
			<nav>
				<ul style={{listStyle: 'none', display: 'flex', width: '90vw', justifyContent: 'space-evenly'}}>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/faq">F.A.Q.</Link></li>
					<li><Link to="/store">Store</Link></li>
					<li><Link to="/app">App</Link></li>
				</ul>
			</nav>
		</div>
	)
}

export default NavigationBar