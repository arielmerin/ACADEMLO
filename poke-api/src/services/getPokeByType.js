

import axios from 'axios'

const baseUrl = 'https://pokeapi.co/api/v2/'

const getPokeByType =name =>{
    const promise = axios(`${baseUrl}type/${encodeURIComponent(name.toLowerCase())}`, {
        method: 'GET'
    })

    return promise
}

export default getPokeByType