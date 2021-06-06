import ResidentInfo from "./ResidentInfo";
import styled from "styled-components";
import {useState, useEffect} from 'react';
import axios from "axios";

const StyledResident = styled.div`
      width: 10%;
      min-width: 100px;
      display: flex;
      margin: 10px 6px;
      padding: 10px;
      color: white;
     
      background-color: #484f5c;
      border-radius: 16px;
      
      & img{
      border-radius: 10%;
      width: 100%;
      }
      & h3{
      font-size: 1rem;
      }

`

const ResidentContainer = ({url}) =>{

    const [name, setName] = useState('')
    const [imgURL, setImgURL] = useState('')
    const [status, setStatus] = useState('')
    const [episodes, setEpisodes] = useState('')
    const [origin, setOrigin] = useState('')

    useEffect(()=>{
        if(url){
            const promise = axios(url, {method: 'GET'})
            promise.then(res =>{
                setName(res.data.name)
                setImgURL(res.data.image)
                setStatus(res.data.status)
                setEpisodes(res.data.episode.length)
                setOrigin(res.data.origin.name)
            })
        }
    }, [url])

    return(
        <StyledResident>
            <ResidentInfo name={name} imgUrl={imgURL} episodes={episodes} status={status}  origin={origin}/>
        </StyledResident>
    )
}

export default ResidentContainer;
