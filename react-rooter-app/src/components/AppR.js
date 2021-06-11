import React from 'react'
import {useAuth} from "../provider/AuthProvider";

const AppR = () => {
	const {signOut} = useAuth();
	return (
		<div>
			'Home Route' ya lo pinches pudimos ver omg
			<button onClick={()=>{
				signOut(()=>{
					console.log('ya estamos des logueados ')
				})
			}}>SignOut</button>
		</div>
	);
};

export default AppR;
