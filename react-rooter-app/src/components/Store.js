import { Route, Switch, Link, useRouteMatch, useParams } from 'react-router-dom';
import React from 'react'


const Store = () => {

	let {path, url} = useRouteMatch();
	const {productosss} = useParams()
	console.log('este es el nombnre de mi param ', productosss)
	console.log('esto es un path ', path, ' esto es una url ', url)
	return <div>
		<nav>
			<ul>
				<li><Link to={`${url}/details`}> Detalles </Link></li>
				<li><Link to={`${url}/more`}>Más productos </Link></li>
			</ul>
		</nav>
		<Switch>
			<Route path={`${path}/details`}>
				Aquívan todos los detallitos y los detalles
			</Route>
			<Route path={`${path}/more`}>
				Aquí amos a mostrar más producots
			</Route>

		</Switch>
		
	</div>
}

export default Store;
