
import styled from 'styled-components';

const TodoItem = ({task, student, isCompleted, handleCompleted, handleDelete, id}) =>{
	const Taskedty = styled.div`
margin: 0.3em;
border: 1px solid aliceblue;
& h4, h5{
	margin: 0.3rem ;
}
`

	return(
		<Taskedty>
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
			} /> {isCompleted? 'completao': 'no completao'}
			<div>

				<button onClick={()=> handleDelete(id)}>Eliminalo alv</button>
			</div>
		</Taskedty>
	)
}

export default TodoItem