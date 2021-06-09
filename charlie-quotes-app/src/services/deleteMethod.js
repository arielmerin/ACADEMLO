
import axios from 'axios'

const baseURL = 'https://prof-quotes.herokuapp.com/api/'


const deleteMethod = (id) =>{
	console.log('desde delete ' ,id)
	return axios({
		method: 'DELETE',
		url: `${baseURL}quotes/${id}`
	})
}

export default deleteMethod