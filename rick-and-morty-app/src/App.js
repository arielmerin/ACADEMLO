import './App.css';
import SearchBox from "./components/SearchBox";
import React, {useState} from 'react';
import LocationContainer from "./components/location/LocationContainer";


function App() {

    const [location, setLocation] = useState(Math.floor(Math.random() * 108))
    const [queryTerm, setQueryTerm] = useState('')

  return (
    <div className="App">
        <SearchBox handleClick={setQueryTerm}/>
        <LocationContainer locationId={location} locationName={queryTerm}/>
    </div>
  );
}

export default App;
