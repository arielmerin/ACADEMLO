import './App.css';
import React, {useEffect, useState} from 'react';
import Pokemon from "./components/Pokemon";
import Search from "./components/Search";

function App() {

  const [queryTerm, setQueryTerm] = useState('grass')
  const [pokemonUrls, setPokemonUrls] = useState(['https://pokeapi.co/api/v2/pokemon/1/',])

  const baseUrl = 'https://pokeapi.co/api/v2/type/'

  useEffect(() => {


    fetch(baseUrl+queryTerm)
        .then(data => data.json())
        .then(dat => {
          console.log(dat)
          setPokemonUrls(dat.pokemon)
        })
  },[queryTerm])




  return (
    <div className="App">
      <header className="App-header">
        <Search handleSearch={setQueryTerm} />
          <Pokemon url={pokemonUrls[0]}/>
      </header>
    </div>
  );
}

export default App;
