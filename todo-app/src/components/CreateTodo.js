import {useForm} from "react-hook-form";
import styled from "styled-components";


const TaskInput = styled.textarea`
		size: 2em;
		color: palevioletred;
  		font-size: 1em;
  		border: 2px solid palevioletred;
  		border-radius: 16px;
  		padding: 1em;
  		justify-content: center;
  		align-content: center;
	`
const StudentInput = styled.input`
		size: 1em;
		color: palevioletred;
  		font-size: 1em;
  		border: 2px solid palevioletred;
  		border-radius: 16px;
  		padding: 1em;
	`

const FieldContaier = styled.div`
		display: grid;
	`

const FormContainer = styled.div`
		display: flex;
		width: 100%;
		justify-content: center;
	`

const RegisterButton = styled.button`
		  background:palevioletred;
  		  color: white;
		  font-size: 1em;
		  margin: 1em;
		  padding: 0.25em 1em;
		  border: 2px solid palevioletred;
		  border-radius: 3px;
	`

const CreateTodo = ({handleCreate}) =>{
	const {handleSubmit, register, reset} = useForm()

	const onSubmit = (value) =>{
		handleCreate(value)
		reset()
	}

	return(
		<FormContainer>
			<form onSubmit={handleSubmit(onSubmit)}>
				<FieldContaier>
					<label htmlFor="task"><br/> </label>
					<TaskInput placeholder="Qué tienes pendiente"
					          type="text" id='task'
					          {...register('task', {required: true})}/>
				</FieldContaier>
				<FieldContaier>
					<label htmlFor="student"><br/> </label>
					<StudentInput placeholder="Quién lo va a realizar"
					       type="student" id='student'
					       {...register('student', {required: true})}/>
				</FieldContaier>
				<RegisterButton>Registrar</RegisterButton>
			</form>
		</FormContainer>
	)
}

export default CreateTodo