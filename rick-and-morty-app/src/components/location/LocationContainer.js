import LocationInfo from "./LocationInfo";
import {useEffect, useState} from 'react';
import axios from "axios";
import ResidentContainer from "../resident/ResidentContainer";
import styled from 'styled-components'

const StyledContainer = styled.div`
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      margin: 0 auto;
      justify-content: center;
      align-items: center;
      top: 0;
      right: 0;
      background-color: #353a44;
      overflow: hidden;
      &::-webkit-scrollbar {
  display: none;
}
`


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
            const url = `https://rickandmortyapi.com/api/location/?name=${encodeURI(locationName.toLowerCase())}`
            axios( url, {method: 'GET'}).then(res => {
                setLocation(res.data)
            })
        }
    }, [locationId, locationName])

    useEffect(() => {
            if (location.name){
                setName(location.name)
                setType(location.type)
                setDimension(location.dimension)
                setAmount(location.residents.length)
                setResidents(location.residents.slice(0,9))
            }else if(location.results){
                setName(location.results[0].name)
                setType(location.results[0].type)
                setDimension(location.results[0].dimension)
                setAmount(location.results[0].residents.length)
                setResidents(location.results[0].residents.slice(0,9))
            }

        },
        [location])

    const list = residents.map(((vale, index) => {
        return <ResidentContainer url={vale} key={index} />
    }));

    return (
        <StyledContainer>
            <LocationInfo name={name} type={type} amount={amount} dimension={dimension} />
            {list}
        </StyledContainer>
      )
}
export default LocationContainer;