

import { useState} from 'react';

const Conversor = () =>{

    const [radians, setRadians] = useState(0);
    const [degrees, setDegrees] = useState(0);
    const toRadian = (grades) => {
        return (grades * 0.01745) % Math.PI;
    };

    const toGrades = (radians) => {
        return radians * 57.296;
    };
    return <div>
        <div>
            <h4>Degrees
            <input type="number" onChange={evento =>{
                setRadians(toRadian(evento.target.value))
                setDegrees(evento.target.value)
            }
            } value={degrees}/>
            </h4>
        </div>

        <div>
            <h4>Radians
            <input type="number" onChange={evento =>{
                setDegrees(toGrades(evento.target.value))
                setRadians(evento.target.value)
            }
            } value={radians}/>
            </h4>
        </div>

    </div>
}

export default Conversor