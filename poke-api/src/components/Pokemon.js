
import PokemonItem from './PokemonItem'
import {useState, useEffect} from 'react'

const Pokemon = ({url}) =>{
    const [imgUrl, setImgUrl] = useState('')
    const [type, setType] = useState('')
    const [name, setName] = useState('')
    console.log(url)
    useEffect(() => {
        if(url){
            fetch(url)
                .then(data => data.json())
                .then(data => {
                    // console.log(url)
                    setImgUrl(data.sprites.front_default)
                    setType(data.types[0].type.name)
                    setName(data.name)
                    console.log('ay algo pasa')
                    // console.log(data)
                })
        }

    },[url])
    return(
        <div className='pokemon-item'>
            < PokemonItem type={type} img={imgUrl} name={name} />
        </div>
    )
}

export default Pokemon;