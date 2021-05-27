import './App.css';
import {useState, useEffect} from 'react';


function App() {
    const [data, setData] = useState(null)
    const [iconUrl, setIconUrl] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [maxTemp, setMaxTemp] = useState(0)
    const [minTemp, setMinTemp] = useState(0)
    const [humidity, setHumidity] = useState(0)
    const [feelsLike, setFeelsLike] = useState(0)
    const [mainTemp, setMainTemp] = useState(0)
    const [pressure, setPressure] = useState(0)
    const [sunrise, setSunrise] = useState('')
    const [sunset, setSunset] = useState('')
    const [queryTerm, setQueryTerm] = useState('')

    useEffect(() => {
        fetch('https://pro.openweathermap.org/data/2.5/weather?q=Mexico&units=metric&lang=es&appid=f286f8c580f69e5c65f3036b0edc122f')
            .then(response => response.json())
            .then(res =>{
                console.log(res)
                setData(res)

            })
    }, [])

    useEffect(() => {
        if(data){
            setName(data.name)
            setIconUrl('http://openweathermap.org/img/w/' +data.weather[0].icon  + '.png')
            setDescription(data.weather[0].description)
            setMaxTemp(data.main.temp_max)
            setMinTemp(data.main.temp_min)
            setHumidity(data.main.humidity)
            setFeelsLike(data.main.feels_like)
            setMainTemp(data.main.temp)
            setPressure(data.main.pressure)
            setSunrise(toTime(data.sys.sunrise, data.timezone))
            setSunset(toTime(data.sys.sunset, data.timezone))
        }
    }, [data])

    const toTime = (unix, timeZone) =>{
        let date = new Date((unix  - timeZone) * 1000)
        return date.toLocaleTimeString('es-MX') + date.toLocaleDateString('es-MX')
    }
  return (
    <div className="App">
        <h1>Pronóstico del clima</h1>
        <h1>{name}</h1>
        <img src={iconUrl}  alt="icon from weather"/>
        <h2>{description.toUpperCase()}</h2>
        <div>
            <h3>Humedad: {humidity} %</h3>
            <h3>Sensación de temperatura: {feelsLike}</h3>

            <h3>Temperatura principal: {mainTemp} °C</h3>
            <h3>Temperatura mínima: {minTemp} °C</h3>
            <h3>Temperatura máxima: {maxTemp} °C</h3>
            <h4>Presión atmosférica: {pressure} hPa</h4>
            <div>
                <h5> Amanecer: {sunrise}</h5>
                <h5>Atardecer: {sunset}</h5>
            </div>
        </div>
    </div>
  );
}

export default App;
