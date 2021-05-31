import logo from './logo.svg';
import './App.css';
import searchGif from "./services/searchGif";
import {useEffect} from 'react'

function App() {


    useEffect(()=>{
        searchGif('puppies').then(data =>{
            console.log(data)
        })
    }, [])


  return (
      <div className='App'>
        <header className="App-header">
          .)
        </header>
      </div>
  );
}

export default App;
