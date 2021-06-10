import styled from 'styled-components';

const TodoItem = ({task, student, isCompleted, handleCompleted, handleDelete, id}) =>{

	const Taskedty = styled.div`
		background: #333333;
		margin: 0.3em;
		padding: 0.3em;
		border: 1px solid aliceblue;
		border-radius: 16px;
		width: 100%;
		max-width:90vw;
		& h4, h5{
			margin: 0.3rem ;
		}
	`

	const EraseButton = styled.button`
		  background:palevioletred;
  		  color: white;
		  font-size: 1em;
		  margin: 1em;
		  padding: 0.25em 1em;
		  border: 2px solid palevioletred;
		  border-radius: 3px;
	`
	const doneIdentifier = `mark-as-done-${id}`
	return(
		<Taskedty>
			<p>{task}</p>
			<h5>Student: {student}</h5>
			<label htmlFor={doneIdentifier}>{isCompleted? 'Done': 'Mark as done'}</label>
			<input type="checkbox"
			       id={doneIdentifier}
			       name={doneIdentifier}
			       checked={isCompleted}
			       onChange={()=> {
				       handleCompleted(task, student)
			       }
			} />
			<div>
				<EraseButton onClick={()=> handleDelete(id)}>Erase</EraseButton>
			</div>
		</Taskedty>
	)
}

export default TodoItem