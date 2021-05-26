import logo from './logo.svg';
import './App.css';
import Counter from "./Counter";
import Bulb from "./Bulb";
import Conversor from "./Conversor";
import CalculatorContainer from "./Calculator/CalculatorContainer"
import Example from './Events/Example'
function App() {


  return (
    <div className="App">
      <header className="App-header">
          <div>
              <h3 className="head-title">Online <br/>Degrees-Radians Calculator</h3>
              <Conversor/>
          </div>
          <CalculatorContainer />
          <Example />
      </header>
    </div>
  );
}

export default App;
