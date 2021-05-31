import {useEffect,useState} from 'react'
import ButtonConverter from "./ButtonConverter";
import Pronostic from "./Pronostic";
import MainTemperature from "./MainTemperature";
import '../styles.css'
import RequireUbication from "./RequireUbication";
import Loading from "./Loading";

const WeatherContainer = () =>{

    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [clouds, setClouds] = useState(0)
    const [data, setData] = useState(null)
    const [iconUrl, setIconUrl] = useState('')
    const [description, setDescription] = useState('')
    const [mainTemp, setMainTemp] = useState(0)
    const [maxTemp, setMaxTemp] = useState(0)
    const [minTemp, setMinTemp] = useState(0)
    const [humidity, setHumidity] = useState(0)
    const [pressure, setPressure] = useState(0)
    const [sunrise, setSunrise] = useState('')
    const [sunset, setSunset] = useState('')
    const [degrees, setDegrees] = useState(true)
    const [isLoading, setIsLoading] = useState(true)
    const key = 'f286f8c580f69e5c65f3036b0edc122f'

    useEffect(() =>{

        const error =() => {
            return (
                <div>
                    <h5>Unable to retrieve your location</h5>
                </div>
            )
        }

        const success = (position) =>{
            setLatitude(Number(position.coords.latitude.toPrecision(9)))
            setLongitude(Number(position.coords.longitude.toPrecision(9)))
        }
        navigator.geolocation.getCurrentPosition(success, error)

    }, [])

    useEffect(() => {
        if(latitude !==0 && longitude !== 0){
            fetch('https://pro.openweathermap.org/data/2.5/weather?lat='+
                latitude+
                '&lon=' +
                longitude+
                '&units=metric'+
                '&appid='+ key
                + '&lang=sp'
            )
                .then(response => response.json())
                .then(res =>{
                    setData(res)

                })
        }
    }, [latitude, longitude])

    useEffect(() => {
        if(data){
            setTimeout(()=>{
                setIsLoading(false)
            }, 500)
            setCity(data.name)
            setCountry(data.sys.country)
            setIconUrl('http://openweathermap.org/img/w/' +data.weather[0].icon  + '.png')
            setDescription(data.weather[0].description)
            setMaxTemp(data.main.temp_max)
            setMinTemp(data.main.temp_min)
            setHumidity(data.main.humidity)
            setMainTemp(data.main.temp)
            setPressure(data.main.pressure)
            setSunrise(toTime(data.sys.sunrise, data.timezone))
            setSunset(toTime(data.sys.sunset, data.timezone))
            setClouds(data.clouds.all)
        }
    }, [data])

    const toTime = (unix, timeZone) =>{
        let date = new Date((unix  + timeZone) * 1000)
        return date.toLocaleTimeString('en-US', {timeZone: 'UTC'})
    }

    const toggleUnits = () =>{
        if(degrees){
            setMainTemp(toFarenheit(mainTemp).toPrecision(3))
            setMaxTemp(toFarenheit(maxTemp).toPrecision(3))
            setMinTemp(toFarenheit(minTemp).toPrecision(3))
        }else{
            setMainTemp(toCelsius(mainTemp).toPrecision(3))
            setMaxTemp(toCelsius(maxTemp).toPrecision(3))
            setMinTemp(toCelsius(minTemp).toPrecision(3))
        }
        setDegrees(!degrees)
    }

    const toggleDegrees = (degrees) =>{
        if(degrees){
            return ' °C'
        }
        return ' °F'
    }

    const toFarenheit = (celsius) => {
        return (celsius * (9/5)) + 32;
    };

    const toCelsius = (farenheit) => {
        return (farenheit - 32) * (5/9);
    };

    return(
        !latitude ? <RequireUbication/> :
            isLoading? <Loading/> : <main>
            <h1>Weather App</h1>
            <h6>By Ariel Merino</h6>
            <h3>{country}/{city}</h3>
            <div className="main-container">
                <div>
                    <Pronostic
                        clouds={clouds}
                        description={description}
                        maxTemp={maxTemp}
                        d  egrees={toggleDegrees(degrees)}
                        minTemp={minTemp}
                        pressure={pressure}
                        sunrise={sunrise}
                        sunset={sunset}
                        humidity={humidity}
                    />
                </div>
                <div>
                    <MainTemperature mainTemperature={mainTemp} icon={iconUrl} degrees={toggleDegrees(degrees)} />
                    <ButtonConverter handleClick={toggleUnits} />
                </div>
            </div>
        </main>
        )
}

export default WeatherContainer;
