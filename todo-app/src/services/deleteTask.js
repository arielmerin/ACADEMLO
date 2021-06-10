import axios from 'axios'
const baseURL = 'https://todos-go.herokuapp.com/api/todos'

const deleteTask = (id)=>{
	return axios.delete(`${baseURL}/${id}`)
}

export default deleteTask

