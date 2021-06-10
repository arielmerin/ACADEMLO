import './App.css';
import TodoContainer from "./components/TodoContainer";

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <h1 style={{color: "#333333"}}>Task Manager</h1>
          <TodoContainer />
      </header>
    </div>
  );
}

export default App;
