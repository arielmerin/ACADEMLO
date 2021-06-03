
import React, {useState} from 'react';

const Search = ({handleSearch}) =>{
    const [value, setValue]  = useState('')

    return (
        <>
            <input placeholder="type" type="text" value={value} onChange={event =>{
                setValue(encodeURI(event.target.value) )
            }}/>
            <button onClick={()=>{
                if(value){
                    handleSearch(value)
                }
            }}>Search!</button>
        </>
    )
}

export default Search