import {useForm} from "react-hook-form";

const CreateTodo = ({handleCreate}) =>{

	const {handleSubmit, register, reset} = useForm()

	const onSubmit = (value) =>{
		handleCreate(value)
		reset()
	}

	return(

			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<label htmlFor="task">Tarea </label>
					<textarea placeholder="Qué tienes pendiente" type="text" id='task' {...register('task', {required: true})}/>
				</div>
				<div>
					<label htmlFor="student">Estudiante </label>
					<input placeholder="Quién lo va a realizar"type="student" id='student' {...register('student', {required: true})}/>
				</div>
				<button>registrar</button>
			</form>
	)
}

export default CreateTodo