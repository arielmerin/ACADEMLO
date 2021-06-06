import './App.css';
import SearchBox from "./components/SearchBox";
import React, {useState} from 'react';
import LocationContainer from "./components/location/LocationContainer";
import styled from 'styled-components';


const StyledApp = styled.div`
          background-color: #353a44;
`


function App() {

    const location = Math.floor(Math.random() * 108)
    const [queryTerm, setQueryTerm] = useState('')


  return (
          <StyledApp>
              <SearchBox handleClick={setQueryTerm}/>
              <LocationContainer locationId={location} locationName={queryTerm}/>
          </StyledApp>
  );
}

export default App;
