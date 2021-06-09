import axios from 'axios'

const baseURL = 'https://prof-quotes.herokuapp.com/api/'

const update = (id, newQuote) =>{
	return axios.put(`${baseURL}quotes/${id}`, newQuote )
}

export default update