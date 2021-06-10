
import {useState, useEffect} from 'react';
import TodoItem from "./TodoItem";
import get from "../services/get";
import update from "../services/update";
import CreateTodo from "./CreateTodo";
import create from "../services/create";
import deleteTask from "../services/deleteTask";
import styled from "styled-components";

const TodoContainer = () =>{
	const [todos, setTodos] = useState([]);
	const [markAsDone, setMarkAsDone] = useState(0);
	const [newTask, setNewTask] = useState(null);
	const [currentStatus, setCurrentStatus] = useState(false);
	const [createTask, setCreateTask] = useState(null)
	const [idDeleteTask, setIdDeleteTask] = useState(0)

	const TaskContainer = styled.div`
		display: flex;
	`

	const refresh = () =>{
		get().then(todos =>{
			setTodos(todos.data.todos)
		})
	}
	useEffect(() => refresh(), [])

	const handleCompleted = (task, student)=>{
		const taskToChange = todos.find(item => item.task === task)
		setMarkAsDone(taskToChange.id)
		setCurrentStatus(taskToChange.isCompleted)
		setNewTask({task, student})
	}

	const handleCreateTask = (val) =>{
		const {student, task} = val
		setCreateTask({task, student})
	}

	const handleDeleteTask = (id)=>{
		console.log('esto es pa borrar compa ', id)
		setIdDeleteTask(id)
	}

	useEffect(() => {
		if(idDeleteTask){
			deleteTask(idDeleteTask).then(r =>{
				console.log(r)
				refresh()
			} )
		}
	},[idDeleteTask])

	useEffect(() => {
		if(createTask){
			console.log(createTask)
			create(createTask).then((data) => {
				console.log('lo hiciemos jasjdfja')
				console.log(data)
				refresh()
			})
		}
	},[createTask])


	useEffect(()=>{
		if(markAsDone){
			console.log('orale pues ya entró al markastone')
			update(markAsDone, {...newTask, isCompleted: !currentStatus}).then((dat)=>{
				setMarkAsDone(null)
				setNewTask(null)
				refresh()
			})
		}
	},[markAsDone, currentStatus, newTask])

	const listTodos = todos.map((todo)=>{
		return <TodoItem handleCompleted={handleCompleted} task={todo.task} key={todo.id}  isCompleted={todo.isCompleted} student={todo.student} id={todo.id} handleDelete={handleDeleteTask} />
	})

	return(
		<div>
			<CreateTodo handleCreate={handleCreateTask} />
			<TaskContainer>
				{listTodos}
			</TaskContainer>
		</div>
	)
}

export default TodoContainer