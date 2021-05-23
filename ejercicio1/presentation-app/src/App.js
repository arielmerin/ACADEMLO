import './App.css';
import Card from "./Card";

function App() {
  return (
    <div className="App">
        <div className="container">
            <Card title={"Perfil"} contents={["20 años", "Estado de México", "Estudio Ciencias de la computación", "Revolotoso, sensible y apasionado"]}/>
            <Card title={"Hobbies"} contents={["Tomar fotografías", "Cocinar vegano", "Subirme a un columpio", "Reirme con mi novio"]}/>
            <Card title={"Expectativas"} contents={["Eqiovoxarme tanto que aprenda en el camino", "Despertar más curiosidad en mí por React", "Comenzar a ser más productivo y operacional en front", "Entender cómo funciona el front usando una librería"]}/>
            <Card title={"Qué quiero aprender"} contents={["A nadar", "A equivocarme y aprender de ello", "A expresar mis emociones", "A coexistir con lxs demás"]}/>
            <Card title={"Intereses"} contents={["Programación web", "Solución de problemas", "Diseño web y algoritmos", "Defensoría de los derechos humano"]}/>
        </div>
    </div>
  );
}

export default App;
