
import {useState} from 'react'
const SearchBox = ({handleClick}) =>{

    const [value, setValue] = useState('')
    return <div>
        <input type="text" placeholder="Location" onChange={e => setValue(e.target.value)} />
        <button onClick={()=> handleClick(value)}><img width='10' src="https://img.icons8.com/android/24/000000/search.png"alt=""/></button>
    </div>
}

export default SearchBox;