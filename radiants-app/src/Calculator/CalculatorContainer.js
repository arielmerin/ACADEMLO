import DisplayInput from "./DisplayInput";
import SumButton from "./SumButton";
import EqualButton from "./EqualButton";
import {useState} from 'react'

const CalculatorContainer = () =>{
    const [currentInput, setCurrentInput] = useState(0);
    const [nums, setNums] = useState([]);

    const handleSum = () =>{
        setNums([...nums, parseInt(currentInput)])
        // Esto es para que la calculadora vuelva a estar en ceros después de darle al botón
        setCurrentInput(0 )
    }

    const handleEqual = () =>{
        handleSum()
        const arrayCopy = nums.slice()
        const sum = arrayCopy.reduce((prev, curren)=> prev + curren )
        setCurrentInput(sum)
        setNums([])
    }
    return(
        <div>
            <h5>Calculadora</h5>
            <DisplayInput value={ currentInput} setValue={setCurrentInput}/>
            <SumButton handleClick={handleSum}/>
            <EqualButton handleClick={handleEqual}/>
        </div>
    )
}

export default CalculatorContainer