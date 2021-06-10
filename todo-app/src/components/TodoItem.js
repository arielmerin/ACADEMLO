


const TodoItem = ({task, student, isCompleted, handleCompleted, handleDelete}) =>{
	return(
		<div>
			<h4>Task: {task}</h4>
			<h5>Student: {student}</h5>
			<input type="checkbox"
			       id='status'
			       name='status'
			       checked={isCompleted}
			       onChange={()=> {
			       	    console.log('escuchamos tu clic amos aver que pedo podemos hacer we')
				       handleCompleted(task, student)
			       }
			} />
			<button onClick={()=> handleDelete(task, student)}>x</button>
		</div>
	)
}

export default TodoItem