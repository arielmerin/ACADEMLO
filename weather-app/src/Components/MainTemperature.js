

const MainTemperature = ({icon, mainTemperature, degrees}) =>{

    return (
        <div>
            <img src={icon} alt="Main icon desribing weather pronostic"/>
            <h3> {mainTemperature} {degrees}</h3>
        </div>
    )
}

export default MainTemperature;