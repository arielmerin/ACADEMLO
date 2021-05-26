import { useState} from 'react'

const Counter = ({inital = 0}) => {
    let [counter, setCounter] = useState(inital)
    let [before, setBefore] = useState(0)
    const handleCounter = () =>{
        setCounter(++counter)
    }


    return (
        <div>
            <span>Contador: {counter}</span>
            <div>
                <button onClick={handleCounter}>+</button>
                <button onClick={() => setCounter(prev =>{
                    if(prev === 0){
                        return prev
                    }
                    return prev-1
                })} >-</button>
            </div>
        </div>
    )
}
export default Counter