
import {useState, useEffect} from 'react';
import TodoItem from "./TodoItem";
import get from "../services/get";
import create from "../services/create";
import update from "../services/update";

const TodoContainer = () =>{
	const [todos, setTodos] = useState([]);
	const [markAsDone, setMarkAsDone] = useState(0);
	const [newTask, setNewTask] = useState(null);
	const [currentStatus, setCurrentStatus] = useState(false);

	useEffect(() => {
		get().then(todos =>{
			setTodos(todos.data.todos)
		})
	}, [])

	const handleCompleted = (task, student)=>{
		const taskToChange = todos.find(item => item.task === task)
		setMarkAsDone(taskToChange.id)
		setCurrentStatus(taskToChange.isCompleted)
		setNewTask({task, student})

	}

	useEffect(()=>{
		if(markAsDone){
			console.log('orale pues ya entró al markastone')
			update(markAsDone, {...newTask, isCompleted: !currentStatus}).then((dat)=>{
				setMarkAsDone(null)
				setNewTask(null)
				get().then(todos =>{
					setTodos(todos.data.todos)
				})
			})
		}
	},[markAsDone])

	const listTodos = todos.map((todo)=>{
		return <TodoItem handleCompleted={handleCompleted} task={todo.task} key={todo.id}  isCompleted={todo.isCompleted} student={todo.student} />
	})

	return(
		<div>
			{listTodos}
		</div>
	)
}

export default TodoContainer