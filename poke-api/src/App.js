import './App.css';
import React, {useEffect, useState} from 'react';
import Pokemon from "./components/Pokemon";
import Search from "./components/Search";
import getPokeByType from "./services/getPokeByType";
import NumberItems from "./components/NumberItems";

function App() {
    const [queryTerm, setQueryTerm] = useState('1')
    const [pokeURL, setPokeURL] = useState([])
    const [displayItems, setDisplayItems] = useState(5)


    useEffect(() =>{

        getPokeByType(queryTerm)
            .then(res =>{
                setPokeURL(res.data.pokemon.slice())
            })
        }, [queryTerm]
    )

    const list = (elements) =>{
        const displayElements = pokeURL.slice(0,elements)
        return displayElements.map((item, key) =>{
            return <Pokemon url={item.pokemon.url} key={item.pokemon.name}/>
        })
    }

  return (
    <div className="App">
      <header className="App-header">
        <Search handleSearch={setQueryTerm} />
        <NumberItems handleChange={setDisplayItems} value={displayItems}/>
        <div className='poke-container'>

          {list(displayItems)}
        </div>
      </header>
    </div>
  );
}

export default App;
