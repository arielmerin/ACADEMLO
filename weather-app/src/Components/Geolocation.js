import {useState, useEffect} from 'react'

const Geolocation = ({latitude, longitude}) =>{




    return(
        <>
            Obtaining your location
            <h4>{latitude}</h4>
            <h4>{longitude}</h4>
        </>

    )
}

export default Geolocation