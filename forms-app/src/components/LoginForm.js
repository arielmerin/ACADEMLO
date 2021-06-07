import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import {useState, useEffect} from 'react'
import PrimesContainer from "./PrimeContainer";

const LoginForm = () =>{
    const {handleSubmit, register} = useForm();
    const [primes, setPrimes] = useState([])
    
    const onSubmit = (values) =>{
        const newPrimes = [...primes, values]
        setPrimes(newPrimes)

    }


    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Colecciones de primos</h2>
            <p>Acá vamos a coleccionar los números primos que vayamos encontrando</p>
            <div>
                <label htmlFor="primeInput">Email:</label>
                <input type="number" id="primeInput" {...register('primeInput')} />
            </div>
            <div>
                <label htmlFor="dateDiscover">Email:</label>
                <input type="date" id="dateDiscover" {...register('dateDiscover')} />
            </div>
            <div>
                <button type='submit'>Login</button>
            </div>
            <PrimesContainer primes={primes} />
        </form>
    )
}

export default LoginForm