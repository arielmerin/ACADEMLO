
import {createContext, useContext, useState} from 'react';
import React from 'react';
const authContext = createContext();

const fakeAuthProvider = {
	login: cb =>{
		setTimeout(cb, 500 )
	},
	logout: cb =>{
		setTimeout(cb, 500)
	}
}

const useProvideAuth = () =>{
	const [entrenadorPokemon, setEntrenadorPokemon] = useState(null)

	const signIn = cb =>{
		fakeAuthProvider.login(()=>{
			setEntrenadorPokemon('Ariel Merino')
			cb()
		})
	}

	const signOut = cb =>{
		fakeAuthProvider.logout(()=>{
			setEntrenadorPokemon(null)
			cb()
		})
	}

	return{
		entrenadorPokemon,
		signIn,
		signOut
	}
}

export const ProvideAuth = ({children}) =>{
	const auth = useProvideAuth()

	return <authContext.Provider value={auth}>
		{children}
	</authContext.Provider>
}

export const useAuth = () => useContext(authContext)