

import axios from 'axios'


const getLocation  = location =>{
    const baseURL = 'https://rickandmortyapi.com/api/location/'

        return axios(`${baseURL}${location}`,{
            method: 'GET'
        })
}

export default getLocation