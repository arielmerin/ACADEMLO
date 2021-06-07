import styled from 'styled-components'
import { useForm } from 'react-hook-form'

const LoginForm = () =>{
    const {handleSubmit, register} = useForm();
    
    const onSubmit = (values) =>{
        alert(JSON.stringify(values));
    }
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="username">Email:</label>
                <input type="email" id="username" {...register('userName')} />
            </div>
            <div>
                <button type='submit'>Login</button>
            </div>
        </form>
    )
}

export default LoginForm