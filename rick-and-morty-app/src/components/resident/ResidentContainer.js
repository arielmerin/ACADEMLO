import ResidentInfo from "./ResidentInfo";

import {useState, useEffect} from 'react';
import axios from "axios";


const ResidentContainer = ({url}) =>{

    const [name, setName] = useState('')
    const [imgURL, setImgURL] = useState('')
    const [status, setStatus] = useState('')
    const [episodes, setEpisodes] = useState('')

    useEffect(()=>{
        if(url){
            const promise = axios(url, {method: 'GET'})
            promise.then(res =>{
                setName(res.data.name)
                setImgURL(res.data.image)
                setStatus(res.data.status)
                setEpisodes(res.data.episode.length)
            })
        }
    }, [url])

    return(
        <div>
            <ResidentInfo name={name} imgUrl={imgURL} episodes={episodes} status={status} />
        </div>
    )
}

export default ResidentContainer;