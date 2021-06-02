import {useState} from 'react';

const Search = ({ changeQuery }) =>{
    const [value, setValue] = useState('')
    return <div style={{
        marginBottom: 10
    }}
    >
        <input type="text" value={value} onInput={(e) => {
            const text = e.target.value;
            setValue(text)
        }}/>
        <button onClick={() =>{
            changeQuery(value)
        }}> Search </button>
    </div>
}

export default Search;