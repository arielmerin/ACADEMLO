import LocationInfo from "./LocationInfo";
import {useEffect, useState} from 'react';
import axios from "axios";
import ResidentContainer from "../resident/ResidentContainer";


const LocationContainer = ({locationId, locationName}) => {

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [dimension, setDimension] = useState('')
    const [amount, setAmount] = useState('')
    const [location, setLocation] = useState('')
    const [residents, setResidents] = useState([])

    useEffect(()=>{

        if(!locationName){
            const url = `https://rickandmortyapi.com/api/location/${locationId}`
            axios( url, {method: 'GET'}).then(res => {
                setLocation(res.data)
            })
        }else{
            const url = `https://rickandmortyapi.com/api/location/?name=${locationName}`
            axios( url, {method: 'GET'}).then(res => {
                setLocation(res.data)
            })
        }
    }, [locationId, locationName])

    useEffect(() => {
            if (location){
                setName(location.name)
                setType(location.type)
                setDimension(location.dimension)
                setAmount(location.residents.length)
                setResidents(location.residents)
            }
        },
        [location])

    const list = residents.map(((vale, index) => {
        return <ResidentContainer url={vale} key={index} />
    }));

    return (
        <div>
            <LocationInfo name={name} type={type} amount={amount} dimension={dimension} />
            {list}
        </div>
      )
}
export default LocationContainer;