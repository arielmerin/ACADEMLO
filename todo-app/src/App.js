
import './App.css';
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h3>Tareas pendientes</h3>
          <TodoContainer />
      </header>
    </div>
  );
}

export default App;
