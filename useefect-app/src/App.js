
import './App.css';
import {useEffect, useState} from 'react'
import Quotes from "./Quotes";


function App() {
    console.log('component WillMount: Este componente sólo va a renderizrse cuando se monta')

    const [state, setState] = useState(0);


    useEffect(() =>{

        console.log('Component did mount: se ejecuta sólo una vez cuando se montó el componente')


    }, [])






  return (
    <div className="App">
      <header className="App-header">
          <button onClick={() => setState(state+1)}>
              {state}
          </button>
          <Quotes/>
      </header>
    </div>
  );
}

export default App;
