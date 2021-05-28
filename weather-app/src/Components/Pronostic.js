import Container from "./Container";
const Pronostic = ({description, pressure, clouds, humidity, minTemp, maxTemp, degrees, sunrise, sunset}) =>{
    return (
        <div className="pronostic-container">

            <Container imgUrl="icons/description.svg" data={'"' +description + '"'} altImg="description img icon" idContainer="description" />
            <Container imgUrl="icons/pression.svg" data={'Pressure: ' + pressure + ' maP'} altImg="pressure icon" idContainer="pressure" />
            <Container imgUrl="icons/cloud.svg" data={'Clouds: ' + clouds + '%'} altImg="clouds icon" idContainer="clouds" />
            <Container imgUrl="icons/humidity.svg" data={'Humidity: ' + humidity + '%'} altImg="humidity icon" idContainer="humidity" />
            <Container imgUrl="icons/thermometer.svg" data={'Min. temperature: ' + minTemp  + degrees} altImg="minimum temperature icon" idContainer="min-temp" />
            <Container imgUrl="icons/thermometer.svg" data={'Max. temperature: ' + maxTemp  + degrees} altImg="maximum temperature icon" idContainer="max-temp" />
            <Container imgUrl="icons/sunrise.svg" data={'Sunrise: ' + sunrise } altImg="sunrise icon" idContainer="sunrise" />
            <Container imgUrl="icons/sunset.svg" data={'Sunset: ' + sunset } altImg="sunset icon" idContainer="sunset" />
        </div>
    )
}

export default Pronostic;