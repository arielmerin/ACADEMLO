import axios from 'axios'
const baseURL = 'https://todos-go.herokuapp.com/api/todos'

const create= (newTodo)=>{
	return axios.get(`${baseURL}`, newTodo )
}

export default create;