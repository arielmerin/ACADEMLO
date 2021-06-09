import {useForm} from "react-hook-form";


const CreateQuote = ({options, handleCreate}) =>{
	const {handleSubmit, register, reset} = useForm()
	
	const onSubmit = (val) =>{
		handleCreate(val)
		reset()
	}

	const list = options.map((option, key) =>{
		return <option key={key}value={option}>{option}</option>
	})
	return(
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<label htmlFor="quote">Frase </label>
				<input id="quote" type="text" {...register('quote', {required: true})}/>
			</div>
			<div>
				<label htmlFor="class">Clase </label>
				<select id="class" {...register('class')}>
					{list}
				</select>
			</div>
			<button >Submit!</button>
		</form>
	)
}

export default CreateQuote;