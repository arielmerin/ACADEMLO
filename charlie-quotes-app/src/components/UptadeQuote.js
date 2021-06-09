import {useForm} from "react-hook-form";
import {useEffect} from "react";


const UpdateQuote = ({options, handleUpdate, prevValues}) =>{
	const {handleSubmit, register, reset, setValue} = useForm()

	useEffect(()=>{
		if(prevValues){
			setValue('quote', prevValues.quote)
			setValue('class', prevValues.class)
		}
	}, [])

	const onSubmit = (val) =>{
		handleUpdate(val)
		reset()
	}

	const list = options.map((option, key) =>{
		return <option key={key}value={option}>{option}</option>
	})
	return <form onSubmit={handleSubmit(onSubmit)}>
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
		<button >Update!</button>
	</form>
}

export default UpdateQuote