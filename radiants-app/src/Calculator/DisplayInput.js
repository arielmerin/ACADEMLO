

const DisplayInput = ({value, setValue}) => {
    return <input type="number" onChange={(e) => setValue(e.target.value)} value={value}/>
}

export default DisplayInput