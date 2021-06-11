import React from 'react'
import { useAuth } from "../provider/AuthProvider";
import {Route, Redirect} from "react-router-dom";
const ProtectedRoute = ({children, ...props}) =>{
	const auth = useAuth()
	console.log('esto es el entrenador pokemon desde protectedRoute ', auth.entrenadorPokemon)
	return (<Route
			{...props}
            render={
            	({location}) => auth.entrenadorPokemon ?
		            (children) :
		            (<Redirect to={{pathname: '/about', state: {from: location}}}/>)
            }
	/>)
}

export default ProtectedRoute