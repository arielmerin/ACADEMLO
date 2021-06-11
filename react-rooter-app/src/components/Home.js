import React from 'react'
import{useContext} from 'react'
import ejemplo from "../ejemploContext";
import {useAuth} from "../provider/AuthProvider";
import {useHistory} from 'react-router-dom'

const Home = () => {
	const history = useHistory()
	const val = useContext(ejemplo)
	console.log('esto es desde home omg ', val)
	const {signIn} = useAuth();
	return (
		<div>
			Este es mi home component
			<button onClick={()=>{
				signIn(()=>{
					history.push('/app')
				})
			}}>Login</button>
		</div>
	);
};

export default Home;
