import './App.css';
import React from 'react'

import {HashRouter as Router} from 'react-router-dom'
import NavigationBar from "./components/NavigationBar";
import Routes from "./components/Routes";
import {useAuth} from "./provider/AuthProvider";

function App() {
    const auth = useAuth()
    console.log('Esto es el objeto auth desde app ', auth)
  return (
    <div className="App">
      <header className="App-header">
        <Router>
            <NavigationBar />
            <Routes/>
        </Router>
      </header>
    </div>
  );
}

export default App;
