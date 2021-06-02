import logo from './logo.svg';
import './App.css';
import searchGif from "./services/searchGif";
import {useEffect, useState} from 'react'
import Gif from './components/Gif'
import Search from "./components/Search";

function App() {
    const [currentGif, setCurrentGif] = useState({
        url: ''
    })
    const [query, setQuery] = useState('puppies')

    useEffect(()=>{
        searchGif(query).then(data =>{
            console.log(data)
            setCurrentGif(data.data[Math.floor(Math.random() * data.data.length)].images.original.url)
        })
    }, [query])


  return (
      <div className='App'>
        <header className="App-header">
            <h1>Gif Searcher</h1>
            <Search changeQuery={setQuery}  />
          <Gif url={currentGif} />
        </header>
      </div>
  );
}

export default App;
