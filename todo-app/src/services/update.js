import axios from 'axios'
const baseURL = 'https://todos-go.herokuapp.com/api/todos'

const update = (id, obj) =>{
	console.log('andale pues esto es desde axios en update ')
	return axios.put(`${baseURL}/${id}`, obj)
}

export default update;