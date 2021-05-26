
import {useState} from 'react';
const Example = () =>{

    const [color, setColor] = useState('purple');

    return (<div style={{width:160, height:160, backgroundColor:color}}
                 onMouseEnter={() => setColor('purple')}
                onMouseLeave={() => setColor('black')}></div>)
}

    export default Example