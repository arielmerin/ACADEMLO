import axios from 'axios'
const baseURL = 'https://todos-go.herokuapp.com/api/todos'

const create= (newTodo)=>{
	return axios.post(`${baseURL}`, newTodo )
}

export default create;