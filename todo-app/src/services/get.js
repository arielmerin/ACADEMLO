
import axios from 'axios'
const baseURL = 'https://todos-go.herokuapp.com/api/todos'


const get = () =>{
	return axios.get(baseURL)
}

export default get