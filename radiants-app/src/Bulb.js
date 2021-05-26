
import {useState} from 'react';

const Bulb = () =>{

    const [isOn, setIsOn] = useState('');
    const handleBulb = () =>{
        if(isOn === 'OFF'){
            setIsOn('ON')
        }else{

            setIsOn('OFF')
        }
    }

    return (<div>
        <p>La bombilla está : {isOn}</p>
        <button onClick={handleBulb}>Switch</button>
        </div>)
}

export default Bulb

