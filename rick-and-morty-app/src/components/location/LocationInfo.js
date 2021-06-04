
const LocationInfo = ({name, type, dimension, amount}) =>{
    return(
        <div>
            <h3>Location: {name}</h3>
            <h5>Type: {type}</h5>
            <h4>Dimension: {dimension}</h4>
            <p>{amount} Residents</p>
        </div>
    )
}

export default LocationInfo;