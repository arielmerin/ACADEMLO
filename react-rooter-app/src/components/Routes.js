import { Route, Switch} from "react-router-dom";
import React from 'react'
import About from "./About";
import AppR from "./AppR";
import FAQ from "./FAQ";
import Store from "./Store";
import Home from "./Home";
import ProtectedRoute from "./ProtectedRoute";

const Routes = () =>{


	return <Switch>
		<Route path='/about' ><About/></Route>
		<ProtectedRoute path='/app' ><AppR/></ProtectedRoute>
		<ProtectedRoute path='/faq' ><FAQ/></ProtectedRoute>
		<Route path='/store' >
			<Store/>
		</Route>
		<Route path="/"  ><Home/></Route>
	</Switch>
}

export default Routes